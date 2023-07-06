const express =require('express');

const router = express.Router();

// user APIs
router.post('/register',createUser);
router.post('/login',loginUser);

module.exports = router;