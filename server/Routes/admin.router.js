const router = require('express').Router()
const { User } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
      const response = await User.findAll({raw: true})
      res.json(response)
  })
  .delete(async (req, res) => {
    const user = await User.findOne({where: { phone: req.body.phone }})
    if (user) {
       await user.destroy()
       res.json({deleted: true})
    } else {
      res.json({deleted: false})
    }
  })


module.exports = router;
