'use strict';
require('dotenv').config();
const {User} = require('../models')
const {Konsultasi} = require('../models')
const {JadwalPsikolog} = require('../models')

const Op = require('sequelize').Op;

const requestPromise = require("request-promise");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const {client:wa} = require('../wa')

let midtransClient = require('midtrans-client');

const coreApi = new midtransClient.CoreApi({
    isProduction : false,
    serverKey : 'SB-Mid-server-cmqPYSmc62bMyDzmM4QDTQtz',
    clientKey : 'SB-Mid-client-jekIiVqQWiglwpnb'
});

// konfigurasi zoom link
const payload = {
    iss: process.env.API_KEY, //your API KEY
    exp: new Date().getTime() + 5000,
};

const token = jwt.sign(payload, process.env.API_SECRET);

const email = "eriscapricron@gmail.com"; // your zoom developer email account

var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
            topic: "Zoom Meeting Using Node JS", //meeting title
            type: 1,
            settings: {
            host_video: "true",
            participant_video: "true",
        },
    },
    auth: {
        bearer: token,
    },
    headers: {
        "User-Agent": "Zoom-api-Jwt-Request",
        "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
};

// -- 

exports.makeBookingKonsultasi = async (req, res) => {

    const {bank, keterangan, jadwal_id} = req.body;
    const client_id  = req.user.id;

    try{

        const jadwal = await JadwalPsikolog.findOne({
            where: {
                id: jadwal_id
            },
            include:{
                model: User,
                as: 'psikolog',
                attributes: {exclude: ['password']}
            },
        })

        console.log(jadwal)

        const psikolog_id = jadwal.psikolog.id;
        const tanggal = jadwal.tanggal;
        const jam = jadwal.jam;

        await JadwalPsikolog.destroy({
            where: {
                id: jadwal_id
            }
        })

        const client = await User.findOne({
            where: {
                id: client_id  
            }
        });

        const psikolog = await User.findOne({
            where: {
                id: psikolog_id
            }
        });

        const first_name = client.name.split(' ')[0];
        const last_name = client.name.split(' ').slice(1).join(" ")
        const orderId = () => {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < 9; i++ ) {
                if(i % 3 == 0 && i != 0){
                    result += '-';
                }
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return "FBX-"+result+"-IDN";
        }
        const order_id = orderId();

        while(true){
            const cekOrder = await Konsultasi.findOne({
                where: {
                    order_id:order_id
                }
            });
            if(cekOrder){
                order_id = orderId();
            }else{
                break;
            }
        }

        await Konsultasi.create({
            order_id,
            client_id,
            psikolog_id,
            tanggal,
            jam,
            status: "pending"
        })

        const parameter = 
        {
            "payment_type": "bank_transfer",
            "bank_transfer": {
                "bank": bank
            },
            "transaction_details": {
                "order_id": order_id,
                "gross_amount": 50000
            },
            "item_details" : [
                {
                    "id" : order_id,
                    "price" : 50000,
                    "quantity" : 1,
                    "name" : `Konsultasi Feelsbox with ${psikolog.name}`,
                    "description": keterangan,
                }
            ],
            "customer_details": {
                "first_name": first_name,
                "last_name": last_name,
                "email": client.email,
                "phone": client.phone,
                "billing_address": {
                    "first_name": first_name,
                    "last_name": last_name,
                    "phone": client.phone,
                    "city": client.domisili,
                },
                "shipping_address": {
                    "first_name": first_name,
                    "last_name": last_name,
                    "phone": client.phone,
                    "city": client.domisili,
                }
            }
        }


        
        coreApi.charge(parameter).then((chargeResponse)=>{
            
            const pesan = `
Hai ${client.name} \n
Mohon segera melakukan pembayaran dalam waktu 24 jam \n
            
No Order: ${order_id}
Bank : ${chargeResponse.va_numbers[0].bank}
Virtual Account Pembayaran: ${chargeResponse.va_numbers[0].va_number}
`
            wa.sendMessage(`${client.phone}@c.us`, pesan)

            return res.json({
                message: 'Charge Response:',
                data: chargeResponse
            });

        })
        .catch((e)=>{
            console.log('Error occured:',e.message);
            res.json({
                status: 'error',
                message: e.message,
                data: []
            })
        });
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}


exports.notificationMidtrans = async (req,res) => {
    coreApi.transaction.notification(req.body)
    .then(async (statusResponse) => {
        try {
            const order_id = statusResponse.order_id;

            const konsultasi = await Konsultasi.findOne({
                where: {
                    order_id
                },
                include: [
                    {
                        model: User,
                        as: 'client'
                    },
                    {
                        model: User,
                        as: 'psikolog'
                    }
                ]
            });


            const jam = konsultasi.jam
            const tanggal = konsultasi.tanggal
            const client_name = konsultasi.client.name
            const psikolog_name = konsultasi.psikolog.name
            const phone = konsultasi.client.phone

            const statusPembayaran = statusResponse.transaction_status

            if(!konsultasi.message){
                if(statusPembayaran == "settlement"){
                    requestPromise(options)
                        .then(async function (res) {
                            console.log("Link Zoom: ", res.join_url)
                            console.log("Id Meeting: ", res.id)
                            console.log("Passcode: ", res.pstn_password)
        
                            await Konsultasi.update(
                                {
                                    link: res.join_url,
                                    status: statusPembayaran,
                                    message: true
                                },
                                {
                                    where: {
                                        order_id
                                    },
                                }
                            )
        
                            const pesan = `
Hai ${client_name} \n
Terima kasih telah melakukan pembayaran
        
=== Konsultasi Feelsbox ===
Nama Psikolog: ${psikolog_name}
Tanggal: ${tanggal}
Jam: ${jam}
        
Berikut adalah link zoom meeting anda 
Link Zoom: ${res.join_url}
Id Meeting: ${res.id}
Passcode: ${res.pstn_password}
        
Pastikan kamu bergabung ke zoom sesuai jadwal ya :)
        `
                    wa.sendMessage(`${phone}@c.us`,pesan)
        
                        console.log(statusResponse)
        
                        })
                        .catch(function (err) {
                            // API call failed...
                            console.log("API call failed, reason ", err);
                        });
                }
            }
        } catch (error) {
            
        }
    });
}


exports.getAllTransaksion = async (req, res) => {
    coreApi.transaction.status('2LsoPsO2pc4').then((statusResponse)=>{
        console.log('Status Response:', statusResponse);
        res.json({
            message: 'Status Response:',
            data: statusResponse
        });
    })
}


exports.getAllBooking = async (req, res) => {
    try {
        const konsultasi = await Konsultasi.findAll({
            include: [
                {
                    model: User,
                    as: 'client'
                },
                {
                    model: User,
                    as: 'psikolog'
                }
            ]
        });
        res.json({
            message: 'Get All Booking',
            data: konsultasi
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}