import { config } from "dotenv";
import app from "./app.js"

config();

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});