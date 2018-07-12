const router = require('express').Router();
const userRoutes = require('./user');
const occasionRoutes = require('./occasion')
const suggestionRoutes = require('./suggestion')

router.use('/user', userRoutes);
router.use('/occasion', occasionRoutes);
router.use('/suggestion', suggestionRoutes);


module.exports = router;