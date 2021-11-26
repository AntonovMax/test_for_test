const router = require('express').Router()
const { User } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
      const response = await User.findAll({raw: true})
      console.log(response);
      res.json(response)
  })


module.exports = router;
