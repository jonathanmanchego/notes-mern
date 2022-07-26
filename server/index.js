import express from "express";
import { config } from "./environment/config.js";
import router from "./routes/index.routes.js";
import bodyParser from "body-parser";
const app = express();
const bodyJson = bodyParser.json();
const bodyUrl = bodyParser.urlencoded({ extended: true });

app.use(bodyJson);
app.use(bodyUrl);
app.use(router);


app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});