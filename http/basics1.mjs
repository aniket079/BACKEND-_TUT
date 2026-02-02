// HTTP (HyperText Transfer Protocol) is a communication protocol that defines how a client and server talk to each other.
// HTTP is the language browsers and servers use to communicate.




// HTTP is Stateless (VERY IMPORTANT)

// Each HTTP request is independent.

// Server does NOT remember:

// Previous request

// User state

// Login info

// This is why we need:

// Cookies

// Sessions

// Tokens (JWT)





// An HTTP request has 4 main parts:

// Method

// URL

// Headers

// Body (optional)


// | Method | Meaning        |
// | ------ | -------------- |
// | GET    | Fetch data     |
// | POST   | Send data      |
// | PUT    | Update data    |
// | DELETE | Remove data    |
// | PATCH  | Partial update |




// Headers carry extra information:

// Content-Type: application/json
// Authorization: Bearer token


// Used for:

// Auth

// Data format

// Caching



// Body (Data)

// Only for methods like:

// POST

// PUT

// PATCH



// Server sends back:

// Status code

// Headers

// Body



// In Node.js, HTTP is:

// Event-driven

// You don’t “handle requests manually” —
// you register a listener for request events.



import http from "http"

// const server = http.createServer((req, res) => {
//   res.end("Hello World2")
// })


// server.listen(3000);













//how to send obj in response 

const server = http.createServer((req, res) => {
  const responseObj = {
    success: true,
    message: "User created",
    userId: 101
  }

  res.writeHead(200, {
    "Content-Type": "application/json"
  })

  res.end(JSON.stringify(responseObj))
})

server.listen(3000)




