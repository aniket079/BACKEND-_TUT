export const getUsers = (req, res) => {
  res.json({
    success: true,
    data: []
  });
};

// export const createUser = (req, res) => {
//   res.status(201).json({
//     success: true,
//     message: "User created",
//     data:req.body
//   });
// };






// try catch


export const createUser = (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw new Error("Name is required");
    }

    res.status(201).json({
      success: true,
      message: "User created",
      user:req.body,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

