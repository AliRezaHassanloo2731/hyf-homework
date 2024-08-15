console.clear();
import express, { json } from "express";
import fs from "fs";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

const contents = fs.readFileSync("./documents.json", "utf-8");
const searchServices = JSON.parse(contents);

app.get("/api/search", (req, res) => {
  const query = req.query.q;
  console.log(query);

  if (!query) {
    return res.status(400).send("Missing query parameter: q");
  }

  const results = searchServices.filter(
    (service) =>
      service.name.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
  );
  if (!results.length) {
    return res.status(404).send("No results found");
  }
  res.json(results);
});

app.get("/api/search/:id", (req, res) => {
  const data = searchServices.find(
    (servic) => servic.id === parseInt(req.params.id)
  );
  if (!data) {
    return res.status(404).send("Not Found");
  }
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
