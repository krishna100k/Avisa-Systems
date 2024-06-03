import { NextResponse, NextRequest } from "next/server"
import {connectionEstablished} from "../db"
import { z } from 'zod';

const joinSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    phone: z.string().max(10),
    location: z.string(),
    company: z.string(),
    role: z.string(),
    description: z.string()
}
)


export const POST = async (req: NextRequest) => {
    const data = await req.json();
    const {firstname, lastname, email, phone, location, company, role, description} = joinSchema.parse(data);

    const client = await connectionEstablished();

    if(!client){
        return NextResponse.json("Database client not established!", { status: 500 });
    }

    try{
        const query = `CREATE TABLE IF NOT EXISTS joinus (
            id SERIAL PRIMARY KEY,
            firstname TEXT NOT NULL,
            lastname TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            location TEXT NOT NULL,
            company TEXT NOT NULL,
            role TEXT NOT NULL,
            description TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
          );`
    
         const DBCreated =  client?.query(query);
    
         console.log(DBCreated);
    
         const insertQuery = `INSERT INTO joinus (firstname, lastname, email, phone, location, company, role, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`;
         const values = [firstname, lastname, email, phone, location, company, role, description];
    
         const result = await client.query(insertQuery, values);
    
         console.log(result);
         client.end();

        return NextResponse.json("Data submitted Successfully!", {status: 200});
    }catch(err){
        console.log(err);
        return NextResponse.json(err, {status: 400});
    }



}