import {NextRequest, NextResponse} from "next/server"
import { connectionEstablished } from "../db"
import { newProjectSchema } from "@/types/newProject";



export const POST = async (req: NextRequest) => {
    const client = await connectionEstablished();

    if(!client ){
        return NextResponse.json("Database client not established!", { status: 500 });
    }

    // const DBQuery = `
    // CREATE TABLE IF NOT EXISTS newproject(
    //     id UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    //     company_name TEXT NOT NULL,
    //     company_location TEXT NOT NULL,
    //     company_email TEXT NOT NULL,
    //     company_phone TEXT NOT NULL,
    //     description TEXT NOT NULL,
    //     empid TEXT NOT NULL,
    //     emp_name TEXT NOT NULL,
    //     emp_phone TEXT NOT NULL,
    //     emp_email TEXT NOT NULL
    //   );`
    //   const DBCreated =  await client?.query(DBQuery);
    //   console.log(DBCreated);

    try{

          const data = await req.json();

          const parsedData = newProjectSchema.safeParse(data);
          if(parsedData.error){
              return NextResponse.json({message: "Invalid Email!", zodError : parsedData?.error?.message}, {status: 420})
          }

          const {companyname, companylocation, companyemail, companyphone, description, empid, empname, empemail, empphone} = parsedData.data;
          const query = `
          INSERT INTO newproject (
            company_name,
            company_location,
            company_email,
            company_phone,
            description,
            empid,
            emp_name,
            emp_phone,
            emp_email
          ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9
          )
        `;

        const values = [companyname, companylocation, companyemail, companyphone, description, empid, empname, empphone, empemail];
        const result = await client.query(query, values);

        client.end();

        return NextResponse.json("Form Submitted Successfully!", {status: 200})



    }catch(err){
        console.log(err);
        return NextResponse.json(err, {status: 400});

    }

}