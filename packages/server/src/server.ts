import express from 'express';
const app = express();
const port = 3000;

app.get("/data", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});