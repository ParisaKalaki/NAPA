import express from "express";
import cors from "cors";
import {
  getShips,
  getShip,
  createShip,
  deleteShip,
} from "./services/apiShips.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/ships", async (req, res) => {
  let data = await getShips();
  res.json(data);
});

app.get("/api/ships/:id", async (req, res) => {
  const id = Number(req.params.id);
  let data = await getShip(id);
  res.json(data);
});

app.post("/api/ships", async (req, res) => {
  const ship = req.body;
  const data = await createShip(ship);
  return res.json(data);
});
app.delete("/api/ships/:id", async (req, res) => {
  const id = req.params.id;
  let data = await deleteShip(id);
  return res.json(data);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
export default app;
