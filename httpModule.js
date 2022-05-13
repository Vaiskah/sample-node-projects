const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to HomePage");
  }
  if (req.url === "/about") {
    res.end("This is about page");
  }
  res.end(`
    <h1>Oops....</h1>
    <p>We can't seem to find the page you search</p>
    <a href = '/'>Back Home</a>
    `);
});
server.listen(3000);
