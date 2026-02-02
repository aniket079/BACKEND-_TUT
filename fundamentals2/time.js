// Measuring Time in JavaScript
import { performance } from "perf_hooks"

import fs from "fs/promises"


// console.time("read")

// await fs.readFile("file2.txt")

// console.timeEnd("read")


// ✔ Simple
// ✔ Human readable
// ❌ Less precise
// [prefeered for debugging]






const start = performance.now()
await fs.readFile("file2.txt")
const end = performance.now()

console.log(end - start)

// High precision
// ✔ Scientific measurement
// ✔ Preferred for benchmarking