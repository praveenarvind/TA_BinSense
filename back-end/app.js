import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false, limit: "4mb" }));

app.use(router);

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
