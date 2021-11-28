const router = require('express').Router()

const { User } = require('../db/models')

router.route('/')
  .post(async (req, res) => { // тестовая ручка для данных пользователя
    const user = await User.findOne({where: { phone: req.body.phone }, raw: true})
    user ? res.send({isUser: true, user}) : res.send({isUser: false})
  })
  .put(async (req, res) => {
    const user = await User.findOne({ where: { phone: req.body.phone }, raw: true })

    if (user) {
      const updateUser = await User.update(
        {
          phone: req.body.phone,
          email: req.body.email,
          birthday: req.body.birthday
        },
        { where: { phone: req.body.phone } })

        updateUser ? res.send(true) : res.send(false)
        
    } else {
      const newUser = await User.create({
        phone: req.body.phone,
        email: req.body.email,
        birthday: req.body.birthday
      })
      await newUser.save()
      
      newUser ? res.send(true) : res.send(false)
    }
  })


module.exports = router;
