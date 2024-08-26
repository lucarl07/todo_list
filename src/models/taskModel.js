import conn from "../config/conn.js";
import { DataTypes } from "sequelize";

const Tarefa = conn.define("tarefas", {
  tarefa_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ["pendente", "concluida"],
  }
}, {
  tableName: "tarefas"
})

export default Tarefa;