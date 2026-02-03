const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let html = fs.readFileSync("../temp2/home.html", "utf-8");

    // SERVER-SIDE SCRIPT EXECUTION
    html = html.replace("{{username}}", "Welcome Aniket");
    html = html.replace("{{technology}}", "Learning Node.js Backend");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }
});

server.listen(8080);
