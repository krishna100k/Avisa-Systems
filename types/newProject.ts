import {z} from "zod";

export const newProjectSchema = z.object({
    companyname : z.string(),
    companylocation : z.string(),
    companyemail : z.string().email(),
    companyphone : z.string(),
    description : z.string(),
    empid : z.string(),
    empname : z.string(),
    empemail : z.string().email(),
    empphone : z.string()
})

export type NewProject = z.infer<typeof newProjectSchema>