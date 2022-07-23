import express from "express";
import { config } from "./environment/config.js";
import router from "./routes/index.routes.js";
const app = express();

app.use(router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});