const {Konsultasi} = require('./models')
const {User} = require('./models')


// const order_id = statusResponse.order_id;
const kontol = async () => {
    const order_id = "FBX-I4n-fDN-XNj-IDN"

    const konsultasi = await Konsultasi.findOne({
        where: {
            order_id
        },
        include: [
            {
                model: User,
                as: 'client',
            },
            {
                model: User,
                as: 'psikolog'
            }
        ]
    });

    console.log(konsultasi.client);



}

kontol()