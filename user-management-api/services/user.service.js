
import { users } from "../data/users.js";
export const deleteUserService = (id) => {
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
};


export const createUserService=(email,name)=>{
    console.log("processsing data in service");
    const newUser = {
    id: Date.now().toString(),
    email:email,
    name:name,
  };

  users.push(newUser);

  return newUser;
}

let user = createUserService("aniket","ajsah2@gmail.com");
console.log("users detail pushing ",user);