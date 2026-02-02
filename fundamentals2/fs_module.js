// Node provides 3 styles of FS APIs:

// Sync API

// Callback API

// Promise API

// All do same job — different execution models









// SYNC API

import fs from "fs";

// const data = fs.readFileSync("file.txt", "utf8")
// console.log(data)


// Characteristics

// Blocking 

// Simple

// Freezes event loop

// Use only for:

// Scripts

// Startup config

// CLI tools













// FS Callback API (Traditional Node Style)


fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
})


// Characteristics

// Non-blocking ✅

// Uses callbacks

// CallBACK HELL










import fs from "fs/promises"
const data = await fs.readFile("file2.txt", "utf8")
console.log(data)



// Characteristics

// Non-blocking

// Clean syntax

// Works with async/await

// 📌 Best choice for modern backend




// | API      | Blocking | Readability | Use      |
// | -------- | -------- | ----------- | -------- |
// | Sync     | ✅        | Simple      | ❌ Server |
// | Callback | ❌        | Medium      | Legacy   |
// | Promise  | ❌        | High        | ✅ Modern |
