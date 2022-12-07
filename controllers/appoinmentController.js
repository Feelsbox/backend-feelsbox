const {Konsultasi} = require('../models')
const {User} = require('../models')
const {Psikolog} = require('../models')
exports.getAppointmentUser = async (req, res) => {
    try {
        const appointment = await Konsultasi.findAll({
            where: {
                client_id: req.user.id
            },
            include: {
                model: User,
                as: 'psikolog',
                include: {
                    model: Psikolog,
                }
            },
            order: [
                ['updatedAt', 'DESC']
            ]
        })

        res.status(200).json({
            message: 'Get Appointment successfully',
            data: appointment,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

