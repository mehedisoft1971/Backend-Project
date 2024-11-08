const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Route to create a blog
router.post("/create-blog", blogController.createBlog);

module.exports = router;

//Route Read Blog 
router.get("/read-blog", blogController.readBlog);

module.exports = router;

// Route to update a blog
router.put("/update-blog", blogController.updateBlog);

module.exports = router;

// Route to delete blog
router.get("/delete-blog", blogController.deleteBlog);

module.exports = router;
