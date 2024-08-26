// Dependências
import "dotenv/config"
import express from "express"
import cors from "cors";

// Importando conexão via Sequelize
import conn from "./config/conn.js";

// Importação de Modelos
import taskModel from "./models/taskModel.js"

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

// Conectando com o banco de dados
conn.sync().then(() => {
  app.listen(PORT, () => {
    console.clear()
    console.log(`| Bem-vindo à TO-DO LIST! 📋 |`)
    console.log(`| Servidor na porta: ${PORT} 🚀 |`)
    console.log(`| Banco de dados conectado.  |\n`)
  })
}).catch((error) => console.error(error))