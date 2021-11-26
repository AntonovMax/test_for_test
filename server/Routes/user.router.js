const router = require('express').Router()

const { User } = require('../db/models')

router.route('/')
  .put(async (req, res) => {
    const user = await User.findOne({ where: { phone: req.body.phone }, raw: true })
    // .then(async (record) => {
    //   await record.update({
    //   phone: req.body.phone,
    //   email: req.body.email,
    //   birthday: req.body.birthday
    // })
    // })
    if (user) {
      await User.update(
        { phone: req.body.phone,
          email: req.body.email,
          birthday: req.body.birthday
         },
        { where: { phone: req.body.phone } })
    } else {
      console.log('new');
    }
  })


module.exports = router;
