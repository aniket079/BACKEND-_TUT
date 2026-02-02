// const fs = require("fs")
import fs from "fs";

// blocking code
// const data = fs.readFileSync("file2.txt", "utf8")
// console.log(data)
// console.log("Done")










//non-blocking code
// fs.readFile("file2.txt", "utf8", (err, data) => {
//   console.log(data)
// })


// console.log("Done")





// Blocking vs Non-Blocking (Conceptual Table)
// Feature	             Blocking	        Non-Blocking
// Execution	           Stops            	Continues
// Performance	           Poor	              High
// Server scalability	   Poor               High
// Node.js philosophy	   no                  yes

// Backend rule:

// Blocking code kills servers.


// Sync  vs          Async     vs          Blocking     vs             Non-Blocking


// Concept	                                                           Meaning
// Sync	                                                               Order of execution
// Async	                                                             Deferred completion
// Blocking	                                                           Stops thread
// Non-Blocking	                                                       Doesn't stop thread