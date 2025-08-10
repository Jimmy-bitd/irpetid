const express = require("express");
const app = express();

app.get("/health", (req, res) => res.json({ ok: true }));

app.get("/", (req, res) => {
  res.send(`<html>
    <head><title>Iran National Pet ID — Backend</title></head>
    <body>
      <h1>Backend is running ✅</h1>
      <p>Health: <a href="/health">/health</a></p>
    </body>
  </html>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
