const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log('user info being sent to database')
        console.log(req.body)
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        console.log('userData added to DB');
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.json(err);
    }
});

// used for logging in
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'No account with that username exists. Try again.' });
            return;
        }

        const validPW = await userData.checkPassword(req.body.password);

        if (!validPW) {
            res
                .status(400)
                .json({ message: 'Password is wrong. Try again' });
            return;
        }

        // logs user info to use it later
        // if logged_in, it is set to true.
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'Login successful' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// logging out. the session is "deleted" or .destroy
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });

    } else {
        res.status(404).end();
    }
});

module.exports = router;