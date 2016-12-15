var express = require('express');
var router = express.Router();
const User = require('../db/user');
const Chore = require('../db/chore');


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  if(!isNaN(req.params.id)){
    User.getOne(req.params.id).then(function(user){
      if (user){
        delete user.password;
        res.json(user);
      } else {
        resError(res, 404, "User Not Found");
      }
    })
  } else {
    resError(res, 500, "Invalid ID");
  }
});

router.get('/:id/chore', function(req, res, next) {
  if(!isNaN(req.params.id)){
    Chore.getByUser(req.params.id)
    .then(chore => {
      res.json(chore);
    });
  } else {
    resError(res, 500, "Invalid ID");
  }
});

function resError(res, statusCode, message){
  res.status(statusCode);
  res.json({message});
}

module.exports = router;
