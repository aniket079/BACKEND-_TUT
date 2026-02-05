
import { users } from "../data/users.js";

import { createUserService } from "../services/user.service.js";


export const getUsers = (req, res) => {
  const {token} = req.headers
  console.log("req",req);
  console.log("token",token)
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
};

// export const createUser = (req, res) => {
//   try {
//     const { name, email } = req.body;

//     // // VALIDATION
//     // if (!name || !email) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     message: "Name and email are required"
//     //   });
//     // }

//     const newUser = {
//       id: Date.now().toString(),
//       name,
//       email
//     };

//     users.push(newUser);

//     res.status(201).json({
//       success: true,
//       data: newUser
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


export const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // PARTIAL UPDATE
    if (name) user.name = name;
    if (email) user.email = email;

    res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

//service code
export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    users.splice(index, 1);

    res.status(204).send();

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};




// SERVICE LOGIC

// export const deleteUser = (req, res) => {
//   const deleted = deleteUserService(req.params.id);

//   if (!deleted) {
//     return res.status(404).json({
//       success: false,
//       message: "User not found"
//     });
//   }

//   res.status(204).send();
// };

export const createUser = (req, res) => {
  const {email,name}=req.body;
  
  const userBody = createUserService(name,email);

  res.status(201).json({
    success: true,
    data: userBody
  });
};
