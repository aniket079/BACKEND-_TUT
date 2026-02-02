import fs from "fs/promises"

async function readFileData() {
  console.log("Start")

  await fs.readFile("file.txt")

  console.log("End")
}

console.log("Before")
readFileData()
console.log("After")
