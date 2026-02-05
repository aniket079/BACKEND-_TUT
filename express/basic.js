// “Express is not magic.
// Express is a wrapper around Node’s HTTP server.


// PROBLEMS IN NODE HTTP

// Manual routing

// URL parsing

// Method checking

// Repetitive code

// Hard to scale






// DEFn
// Express is a minimal Node.js framework that simplifies HTTP servers using routing and middleware.







// IMPORTANT
// Express is a function pipeline that runs top to bottom for every request.


// Request
//  ↓
// Middleware
//  ↓
// Middleware
//  ↓
// Route Handler
//  ↓
// Response

import express from "express";


// Creating the Express App
const app = express();




// express() returns a function
// This function handles requests internally
// app is NOT the server yet




app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Express creates an HTTP server
// Binds it to port
// Starts listening



// app.get("/", (req, res) => {
//   res.send("Welcome to Home");
// });





app.get("/user", (req, res) => {
  console.log(req.method); // GET
  console.log(req.url);    // /user
  res.send("User route");
});





