const express = require("express");
const cors = require("cors");
const app = express();
const port = 8082;

app.use(cors());

app.get("/api/notes", (req, res) => {
  const notes = [
    { id: 1, title: "Title 1", content: "Note 1" },
    { id: 2, title: "Title 2", content: "Note 2" },
    { id: 3, title: "Title 3", content: "Note 3" },
  ];
  res.json(notes);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
