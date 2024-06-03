import {z} from "zod"


export const empSchema = z.object({
    empid: z.string(),
    password: z.string()
})

export interface EmployeePayload {
    empid: string;
    firstname: string;
    lastname: string;
    email: string;
    phone : number;
    role: string;
    iat: number;
  }

export type EmpData = z.infer<typeof empSchema>