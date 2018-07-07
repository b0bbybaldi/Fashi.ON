const router = require('express').Router();
const userRoutes = require('./user');
const occasionRoutes = require('./occasion')


router.use('/user', userRoutes);
router.use('/occasion', occasionRoutes);


module.exports = router;