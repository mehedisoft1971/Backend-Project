const Blog = require('../models/Blog'); 

exports.createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    // Create a new blog instance
    const newBlog = new Blog({
      title,
      content,
      author,
    });

    // Save the new blog
    await newBlog.save();

    // Send success response
    return res.status(201).json({ message: "Blog created successfully" });

  } catch (error) {
    console.error('Error creating blog:', error);
    return res.status(500).json({ message: "An error occurred while creating the blog" });
  }
};
// blog Red
exports.readBlog = async (req, res) => {
    try {
      const { blogId } = req.query; // Expecting blogId as a query parameter
      // Send success response with the blog data
      return res.status(200).json({ message: "Blog read successfully" });
  
    } catch (error) {
      console.error('Error reading blog:', error);
      return res.status(500).json({ message: "An error occurred while reading the blog" });
    }
  };



// Blog  Update
exports.updateBlog = async (req, res) => {
 // Send success response
    return res.status(200).json({ message: "Blog updated successfully"});

  } catch (error) {
    console.error('Error updating blog:', error);
    return res.status(500).json({ message: "An error occurred while updating the blog" });
  }

  
// blog delete

exports.deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.query; // Expecting blogId as a query parameter
    // Send success response with the blog data
    return res.status(200).json({ message: "Blog delete successfully"});

  } catch (error) {
    console.error('Error reading blog:', error);
    return res.status(500).json({ message: "Server error. Could not delete blog." });
  }
};
