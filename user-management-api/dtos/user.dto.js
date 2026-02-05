export const validateCreateUserDTO = (req, res, next) => {
console.log("USING DTO TO CHECK DATA VALIDATION")
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required"
    });
  }

  next();
};











export const updateUserDTO = (req, res, next) => {
  const { name, email } = req.body;

  if (!name && !email) {
    return res.status(400).json({
      success: false,
      message: "At least one field (name or email) is required"
    });
  }

  if (email && !email.includes("@")) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  next();
};
