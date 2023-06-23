const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes')
const commentRoutes = require('./commentRoutes')
//need to const another model when done setting up

router.use('/user', userRoutes);
router.use('/blog', blogRoutes)
router.use('/comment', commentRoutes)
// router.use('/ourmodel', modelroutes);


module.exports = router;