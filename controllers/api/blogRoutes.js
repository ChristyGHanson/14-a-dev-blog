//  similar to number 13
const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const blog = await Blog.findAll({
            include: [{ model: User }, { model: Comment }]
        })
        res.status(200).json(blog);
    }
    catch (err) {
        res.json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        // get blog and user it belongs to, and the blog it belongs to.
        const blog = await Blog.findByPk(req.params.id,{
            include: [{ model: User }, { model: Comment }]
        })
        res.status(200).json(blog);
    }
    catch (err) {
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // get blog and user it belongs to, and the blog it belongs to.
        const blog = await Blog.destroy(req.params.id)
        res.status(200).json(blog);
    }
    catch (err) {
        res.json(err);
    }
});

// Copy paste 
// router get by for the id, put, and delete 
// find by pk 
// reference Module 13 routes -- categoryRoutes.js file!
router.post('/', async (req, res) => {
    try {
        // console.log(req.body)
        const newBlog = await Blog.create(
            // get id of currently logged in user
            {...req.body,user_id:req.session.user_id}
        )
        res.status(200).json(newBlog);
    }
    catch (err) {
        res.json(err);

    }
});

// router.put updates
router.put('/:id', async (req, res) => {
    try {
        // console.log(req.body)
        const newBlog = await Blog.update(
            req.body,
        {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(newBlog);
    }
    catch (err) {
        res.json(err);

    }
});

module.exports = router;