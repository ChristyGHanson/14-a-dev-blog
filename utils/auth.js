// Checks if user is logged in.
// if not logged in, redirects to login page. 
const withAuth = (req, res, next) => {
    console.log(req.session.logged_in)
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

// if not logged in, redirect to the /dashboard page
const withoutAuth = (req, res, next) => {
    console.log(req.session.logged_in)
    if (req.session.logged_in) {
        res.redirect('/dashboard');
    } else {
        next();
    }
};


module.exports = { withAuth, withoutAuth };