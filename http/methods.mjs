import http from "http"

// ❌ GLOBAL VARIABLE (shared across all requests)
let body = ""

const server = http.createServer((req, res) => {
  console.log("\n--- New Request ---")
  console.log("Method:", req.method)
  console.log("URL:", req.url)

  res.setHeader("Content-Type", "application/json")

  // ================= GET =================
  if (req.method === "GET" && req.url === "/users") {
    console.log("GET request received")
    console.log("Current global body value:", body)

    res.end(JSON.stringify({
      message: "Fetched users",
      bodyValue: body
    }))
  }

  // ================= POST =================
  else if (req.method === "POST" && req.url === "/users") {

    console.log("POST request started")
    console.log("Initial global body:", body)

    req.on("data", chunk => {
      console.log("Chunk received:", chunk.toString())
      body += chunk
      console.log("Global body updated to:", body)
    })

    req.on("end", () => {
      console.log("POST request ended")
      console.log("Final global body:", body)

      const parsedData = JSON.parse(body)

      res.statusCode = 201
      res.end(JSON.stringify({
        message: "User created",
        receivedData: parsedData
      }))
    })
  }

  // ================= PUT =================
  else if (req.method === "PUT" && req.url === "/users") {

    console.log("PUT request started")
    console.log("Existing global body:", body)

    req.on("data", chunk => {
      console.log("Chunk received:", chunk.toString())
      body += chunk
      console.log("Global body updated to:", body)
    })

    req.on("end", () => {
      console.log("PUT request ended")
      console.log("Final global body:", body)

      res.end(JSON.stringify({
        message: "User replaced",
        bodyValue: body
      }))
    })
  }

  // ================= PATCH =================
  else if (req.method === "PATCH" && req.url === "/users") {

    console.log("PATCH request started")

    req.on("data", chunk => {
      console.log("Chunk received:", chunk.toString())
      body += chunk
      console.log("Global body updated to:", body)
    })

    req.on("end", () => {
      console.log("PATCH request ended")

      res.end(JSON.stringify({
        message: "User updated partially",
        bodyValue: body
      }))
    })
  }

  // ================= DELETE =================
  else if (req.method === "DELETE" && req.url === "/users") {
    console.log("DELETE request received")
    console.log("Global body before delete:", body)

    body = "" // reset global body
    console.log("Global body cleared")

    res.end(JSON.stringify({
      message: "User deleted",
      bodyValue: body
    }))
  }

  // ================= NOT FOUND =================
  else {
    res.statusCode = 404
    res.end(JSON.stringify({ error: "Route not found" }))
  }
})

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})
