const fs = require('fs');
const models = require('../models');

const { Op } = require("sequelize");

exports.transaksi = async (msg) => {
    const message = msg.body.split(' '); 

    const id_pemesanan = message[2];

    if(message[1] ===  'id_pemesanan'){
        const konsultasi = await models.konsultasi.findOne({
            where: {
                [Op.or]: [{id_pemesanan}]
            }
        });

        if(konsultasi){
            if(konsultasi.dataValues.status == "pembayaran"){
                if(msg.hasMedia) {
                    const media = await msg.downloadMedia();
                    const base64 = media.data;
                    const buffer = Buffer.from(base64, 'base64');
                    let path = `../Laravel/storage/app/transaksi/${msg.from}-${Date.now()}.jpg`
                    fs.writeFileSync(path, buffer);
                    msg.reply("terimakasih telah melakukan pembayaran admin akan segeram memproses pemesanan anda");
                    path = path.replace('/app', '');
                    path = path.replace('../Laravel', '');
                    konsultasi.update({
                        status: 'admin',
                        bukti_pembayaran: path
                    });
                }else{
                    msg.reply("mohon sertakan bukti transaksi anda");
                }

            }else{
                msg.reply("anda telah melakukan pembayaran")
            }
        }else{
            msg.reply("id_pemesanan tidak ditemukan mohon periksa kembali");
        }

    }
}