const User = require("../models/user"); 


exports.userInfo = async (req, res, next) => {
  try {
    
    
    const user = await User.findById(req.userId);
    res.status(200).json({
      success: true,
      user:{
        name:user.name,
        email:user.email
      },
    });

  } catch (err) {
    next(err);
  }
};

