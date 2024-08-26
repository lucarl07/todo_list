// Dependências
import "dotenv/config"
import express from "express"
import cors from "cors";

// Conexão com o banco de dados
import conn from "./config/conn.js";

// Importação de Rotas
import taskRouter from "./routes/taskRouter.js"

// Porta do Servidor
const PORT = process.env.PORT || 3333

// Inicializando o Express
const app = express();

// Middlewares Principais
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Utilizando Rotas
app.use("/tarefas", taskRouter)

app.listen(PORT, () => {
  // console.clear()
  console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:")
  console.log(`| Bem-vindo à TO-DO LIST! 📋 |`)
  console.log(`| Servidor na porta: ${PORT} 🚀 |`)
  console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:\n")
})