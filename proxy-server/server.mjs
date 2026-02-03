import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  console.log("Request:", req.url);

  // ROUTE: PRODUCTS (SSR + PROXY)
  if (req.url === "/products") {
    // 1. fetch data from external API
    const apiRes = await fetch("https://dummyjson.com/products");
    const data = await apiRes.json();

    // 2. convert data to HTML
      let productHTML = "";
      data.products.forEach(p => {
          productHTML += `
    <li>
      <h3>${p.title}</h3>
      <img src="${p.thumbnail}" width="150" />
    </li>
  `;
      });
    // 3. read template
    const templatePath = path.join(__dirname, "temp.html");
    let html = fs.readFileSync(templatePath, "utf-8");

    // 4. hydrate template
    html = html.replace("{{products}}", productHTML);

    // 5. send final HTML
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  }

  // SEND CSS
  if (req.url === "/style.css") {
    const css = fs.readFileSync(path.join(__dirname, "style.css"));
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
    return;
  }

  // SEND FAVICON
  if (req.url === "/favicon.ico") {
    const icon = fs.readFileSync(path.join(__dirname, "favicon.png"));
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(icon);
    return;
  }

  // DEFAULT
  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/products");
});
