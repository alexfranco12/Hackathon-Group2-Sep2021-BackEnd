const express = require('express');
const router = new express.Router();

/*
*  ROOT ROUTES
*/

// redirect to dog catalog
router.get("/", (req, res) => {
  res.send({
      status: '200'
    });
});

module.exports = router;