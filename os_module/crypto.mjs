import crypto from "crypto"

crypto.pbkdf2(
  "password",
  "salt",
  100000,
  64,
  "sha512",
  (err, derivedKey) => {
    if (err) throw err
    console.log("Hash generated")
  }
)

console.log("This runs immediately")
//also show pbkdf2Sync







// real example of password hashing 

function hashPassword(password, salt) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 100000, 64, "sha512",
      (err, key) => {
        if (err) reject(err)
        else resolve(key.toString("hex"))
      }
    )
  })
}

const userSalt = crypto.randomBytes(16).toString("hex")
const hash = await hashPassword("mypassword", userSalt)

console.log("hash",hash);
console.log("userSalt",userSalt);


