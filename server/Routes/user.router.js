const router = require('express').Router()

router.route('/')
  .get(async (req, res) => {
      console.log('Hi user')
  })


module.exports = router;
