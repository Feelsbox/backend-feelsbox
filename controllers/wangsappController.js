
const {client:wa} = require('../wa');


exports.verifiedWA = async (req,res) => {

    const {phone} = req.body;

    try{
        await wa.isRegisteredUser(`${phone}@c.us`)
        .then((result) => {
            res.status(200).json({
                message: 'Phone Number Verified',
                result
            })
        }).catch(err => {
            res.json(err);
        })
    }catch(e){

    }

}