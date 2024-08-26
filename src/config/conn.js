import { Sequelize } from "sequelize";

const conn = new Sequelize("todo_list", "root", "Sen@iDev77!.", {
  host: "localhost",
  dialect: "mysql"
})

/** Testando a conexão com o banco de dados:
 * try {
 *   await conn.authenticate()
 *   console.log("[sequelize] Banco de dados conectado com sucesso.")
 * } catch (error) {
 *   console.log("[sequelize] Conexão com o banco de dados falhou: ", error)
 * }
*/

export default conn;