const express = require("express");
var cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello my ");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      images: 1,
      ittle: "jokes",
      constent: "this a joke",
    },
    {
      id: 3,
      ittle: "jokes",
      constent: "this a joke",
    },
    {
      id: 4,
      ittle: "jokes",
      constent: "this a joke",
    },
    {
      id: 5,
      ittle: "jokes",
      constent: "this a joke",
    },
    {
      id: 6,
      ittle: "jokes",
      constent: "this a joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
