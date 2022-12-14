import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import router from "./routers/index.js";
import errorHadler from "./middlewares/errorHandler.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHadler);

app.listen(PORT, () => {
  console.log(`Rodando na porta = ${PORT}`);
});
