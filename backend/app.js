import express from "express"
import cors from "cors"
import { config } from "dotenv"
import Mongo from "./src/database/mongo.js";
import index from "./src/routes/index.js"

config();
const app = express();

app.use(cors());
app.use(express.json());

// Dessa forma todas as rotas vao utilizar esse prefixo e depois o que vem de acordo com a requisição solicitada!
// Exemplo de uso: localhost:3000/api/v1/user/
app.use("/api/v1", index);

(async () => {
  await Mongo.connect({
    mongoConnectionString: process.env.MONGO_CS,
    mongoDbName: process.env.MONGO_DB_NAME,
  });
})();

export default app;