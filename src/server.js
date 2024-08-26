// Dependências
import "dotenv/config"
import express from "express"
import cors from "cors";

// Porta do Servidor
const PORT = process.env.PORT || 3333

// Inicializando o Express
const app = express();

// Middlewares Principais
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())