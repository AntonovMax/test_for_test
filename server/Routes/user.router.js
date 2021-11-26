const router = require('express').Router()

const { User } = require('../db/models')

router.route('/')
  .put(async (req, res) => {
    const user = await User.findOne({ where: { phone: req.body.phone }, raw: true })

    if (user) {
      await User.update(
        {
          phone: req.body.phone,
          email: req.body.email,
          birthday: req.body.birthday
        },
        { where: { phone: req.body.phone } })
    } else {
      const newUser = await User.create({
        phone: req.body.phone,
        email: req.body.email,
        birthday: req.body.birthday
      })
      await newUser.save()
    }
  })


module.exports = router;
