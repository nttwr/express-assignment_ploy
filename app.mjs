import express from "express";

const app = express();
const port = 4000;

app.get("/test", (req, res) => {
  return res.status(200).json("Server API is working 🍄");
});

app.get("/profiles", (req, res) => {
  return res.status(200).json({
    data: {
      name: "john",
      age: 20,
    },
  });
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
