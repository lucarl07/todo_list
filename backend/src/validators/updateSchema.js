import { z } from "zod";

const updateSchema = z.object({
  nome: z.optional(
    z.string()
    .min(5, { message: "O nome da tarefa deve ter pelo menos 5 caracteres." })
    .max(100, {
      message: "O nome da tarefa não pode ter mais de 100 caracteres.",
    })
  ),
  descricao: z.optional(
    z.string()
    .min(10, { message: "A descrição deve conter pelo menos 10 caracteres." })
    .max(1000, { message: "A descrição não pode conter mais de 1000 cracteres." })
  ),
  status: z.optional(
    z.enum(["pendente", "concluida"])
  )
});

export default updateSchema