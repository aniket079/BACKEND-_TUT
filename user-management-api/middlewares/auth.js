let success = true;

export const checkAuth = (req, res, next) => {
  const body = req.body;
  console.log("body");
  const {authorization} = req.body;
  if(success){
    console.log("AUTH CHECKED");
    next();
  }
  else{
    console.log("AUTH FAILED");
     return res.status(400).json({
      message:"AUTH FAILED"
     })
  }
};


// export const validateZod = (schema)=>(req,res,next)=>{
//       let result = schema.safeParse(req.body);
//       console.log("Body parsing in using zod")
//       if(result.success){
//         next();
//       }
//       else{
//           return res.status(400).json({
//          message:"Create User Zod Validation failed"
//      })
//   }
// }












export const validateUserId = (req, res, next) => {
  console.log("Validating users");
  const { id } = req.params;

  if (!id || id.length < 5) {
    return res.status(400).json({
      success: false,
      message: "Invalid user ID"
    });
  }

  next();
};



export const validateZod = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  console.log("result errors",result)
  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.message
    });
  }

  req.body = result.data; // sanitized data
  next();
};
