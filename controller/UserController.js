const  Users  = require('../model/user'); 
// GET user details by user_id
exports.getUserDetails = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await Users.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error.' });
  }
};

// PUT (update) user details
exports.updateUserDetails = async (req, res) => {
    try {
      const { user_id } = req.params;
      const updatedDetails = req.body;
  
      // Check if the user with the given user_id exists
      const user = await Users.findByPk(user_id);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Update user attributes with updatedDetails
      user.user_name = updatedDetails.user_name || user.user_name;
      user.user_email = updatedDetails.user_email || user.user_email;
      user.user_password = updatedDetails.user_password || user.user_password;
      user.user_image = updatedDetails.user_image || user.user_image;
      // You can similarly update other attributes as needed
  
      // Save the updated user data to the database
      await user.save();
  
      return res.json({ message: 'User details updated successfully.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error.' });
    }
  };
  


  // GET user image by user_id
  exports.getUserImage = async (req, res) => {
    try {
      const { user_id } = req.params;
  
      // Check if the user with the given user_id exists
      const user = await Users.findByPk(user_id);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Retrieve the user's image path from the database
      const userImage = user.user_image;
  
      // In this example, we assume that the image path is stored in the 'user_image' column.

      // Return the userImage path or send the image file
      return res.json({ user_image: userImage });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error.' });
    }
  };
  

// POST (insert) a new user
exports.insertUser = async (req, res) => {
    try {
      const newUserDetails = req.body;
  
      // Insert the new user into the database
      await Users.create(newUserDetails);
  
      return res.json({ message: 'User inserted successfully.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error.' });
    }
  };

// DELETE user by user_id
exports.deleteUser = async (req, res) => {
    try {
      const { user_id } = req.params;
  
      // Check if the user with the given user_id exists
      const user = await Users.findByPk(user_id);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Delete the user from the database
      await User.destroy({ where: { user_id } });
  
      return res.json({ message: 'User deleted successfully.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error.' });
    }
  };