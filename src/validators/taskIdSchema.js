import { z } from "zod";

const taskIdSchema = z.object({
  id: z.string().uuid({
    message: "O formato do identificador não é UUID.",
  }),
});

export default taskIdSchema;