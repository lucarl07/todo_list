import { Sequelize } from "sequelize";

const conn = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
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