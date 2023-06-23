const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const { withAuth, withoutAuth } = require('../utils/auth');
const querystring = require('querystring')
const express = require('express');
const sequelize = require('../config/connection');
// needs to be updated every time we creat e anew handlebars page


router.get('/', async (req, res) => {
  try {
    // initiate a variable
    //  remember to include await here
    // blogsRaw - raw data
    const blogsRaw = await Blog.findAll({
      // imported Blog, User and Comment above.
      include: [{
        model: User,
      },
      {
        model: Comment,
      }]
    });

    const blogs = blogsRaw.map((blog) => {
      blog.get({ plain: true })
    })

    res.render('homepage',
      { logged_in: req.session.logged_in, blogs: blogs });
  } catch (err) {
    res.status(500).json(err)
  }
});


// /dashboard refers to the path
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // initiate a variable
    //  remember to include await here
    // blogsRaw - raw data
    const blogsRaw = await Blog.findAll({
      // get only blogs that belong to loggedin user
      where: { user_id: req.session.user_id },

      include: [{
        model: User,
      },
      {
        model: Comment,
      }]
    });

    const blogs = blogsRaw.map((blog) => {
      blog.get({ plain: true })
    })
    // dashboard refers to the name
    res.render('dashboard',
      { logged_in: req.session.logged_in, blogs: blogs });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/login', withoutAuth, async (req, res) => {
  try {
    res.render('login',
      { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err)
  }
});

// used only when user is signed in, so withAuth is implemented.
router.get('/create', withAuth, async (req, res) => {
  try {
    // createBlog references the createBlog.handlebars file
    res.render('createBlog',
      { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/blogs/:id', async (req, res) => {
  try {
    // if logged in and if the user id matches blog owner...
    const blog = Blog.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comment }]
    });
    //  compare blog.user_id to a logged in user. render edit blog page.
    if (req.session.logged_in && req.session.user_id == blog.user_id) {
      res.render('editBlog',
        { logged_in: req.session.logged_in, blog });
    } else {
      // if not the owner, the user only gets to view the blog instead.
      res.render('viewBlog',
        { logged_in: req.session.logged_in, blog });
    }
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;