import {z} from "zod"


export const empSchema = z.object({
    empid: z.string(),
    password: z.string()
})

export type EmpData = z.infer<typeof empSchema>