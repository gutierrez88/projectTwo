const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

//Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>{ 
  console.log(req.user);
  res.render('dashboard', {
    user: req.user
  })
}
);
// router.get('/dashboard', (req, res) =>{ 
//   res.send("HIIIII")
// }
// );
module.exports = router; 
