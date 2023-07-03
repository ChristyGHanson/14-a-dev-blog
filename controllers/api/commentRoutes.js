//  similar to number 13
const router = require('express').Router();
const { Comment, User, Blog } = require('../../models');


router.get('/', async (req, res) => {
    try {
        // get comment and user it belongs to, and the blog it belongs to
        const comment = await Comment.findAll({
            include: [{ model: User }, { model: Blog }]
        })
        res.status(200).json(comment);
    }
    catch (err) {
        res.json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        // get comment and user it belongs to, and the blog it belongs to.
        const comment = await Comment.findByPk(req.params.id,{
            include: [{ model: User }, { model: Blog }]
        })
        res.status(200).json(comment);
    }
    catch (err) {
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // get comment and user it belongs to, and the blog it belongs to.
        const comment = await Comment.destroy(req.params.id)
        res.status(200).json(comment);
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
        const newComment = await Comment.create({
            blog_id: req.body.id,
            content: req.body.content,
            user_id: req.session.user_id,
        })

        res.status(200).json(newComment);
    }
    catch (err) {
        res.json(err);

    }
});

// router.put updates
router.put('/:id', async (req, res) => {
    try {
        // console.log(req.body)
        const newComment = await Comment.update({
            blog_id: req.body.id,
            content: req.body.content,
            user_id: req.session.user_id,
        },
        {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(newComment);
    }
    catch (err) {
        res.json(err);

    }
});

module.exports = router;