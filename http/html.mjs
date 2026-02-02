import http from "http"

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  })

  res.end(`
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <h1>Hello from Backend</h1>
        <p>This HTML is sent by Node.js</p>
      </body>
    </html>
  `)
})

server.listen(3000)













// import http from "http"
// import fs from "fs"

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {

//     fs.readFile("t.html", "utf8", (err, data) => {
//       if (err) {
//         res.statusCode = 500
//         res.end("Error loading page")
//         return
//       }

//       res.writeHead(200, {
//         "Content-Type": "text/html"
//       })

//       res.end(data)
//     })
//   }
// })

// server.listen(3000)






// import http from "http";

// const server = http.createServer((req, res) => {
//   const data = {
//     success: true,
//     message: "User fetched",
//     users: ["Aniket", "Rahul", "Priya"]
//   }

//   res.writeHead(200, {
//     "Content-Type": "application/json"
//   })

//   res.end(JSON.stringify(data))
// })

// server.listen(3000);



// const server = http.createServer((req, res) => {

//   if (req.url === "/" && req.method === "GET") {
//     res.end("Home Page")
//   }

//   else if (req.url === "/about" && req.method === "GET") {
//     res.end("About Page")
//   }

//   else if (req.url === "/users" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json" })
//     res.end(JSON.stringify({
//       users: ["Aniket", "Rahul"]
//     }))
//   }

//   else {
//     res.statusCode = 404
//     res.end("Page Not Found")
//   }
// })


