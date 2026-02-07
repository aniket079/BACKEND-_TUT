
import { users } from "../data/users.js";
import User from "../models/user.js"
export const deleteUserService = (id) => {
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
};

export const getUsersService = async ()=>{
    const users = await User.find().sort({email:1});
    return users
}
export const getUsersServiceisActive = async ()=>{
  console.log("isActive in service")
    const users = await User.find({isActive:true}).limit(5).skip(1);
    return users
}


export const createUserService=async(name,email,password,role)=>{
    console.log("processsing data in service");
    
  //   const newUser = {
  //   id: Date.now().toString(),
  //   email:email,
  //   name:name,
  // };
   const newUser = await User.create({
    name,
    email,
    password,
    role
  });

  // users.push(newUser);
  console.log("users created",newUser);
  return newUser;
}

// let user = createUserService("aniket","ajsah2@gmail.com");
// console.log("users detail pushing ",user);


export const updateUserService =async(id,data)=>{
   const updateData  = await User.findByIdAndUpdate(
    id,
    {$set:data},
    {
      new:true,
      runValidators: true
    }

   )
   return updateData;
}

export const findByEmailAndUpdate =async(email,data)=>{
   const updateData  = await User.findOneAndUpdate(
    {email:email},
    {$set:data},
    {
      new:true,
      runValidators: true
    }

   )
   return updateData;
}