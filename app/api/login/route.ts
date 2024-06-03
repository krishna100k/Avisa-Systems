import { NextResponse, NextRequest } from "next/server";
import { empSchema } from "@/types/employee";
import { connectionEstablished } from "../db";
import jwt from "jsonwebtoken";


export const POST = async (req:NextRequest) => {
    const data = await req.json();
    const parsedData = empSchema.safeParse(data);

    const jwtsecret = process.env.jwtsecret as string;

    if(parsedData.error){
        return NextResponse.json(parsedData?.error?.message, {status: 420})
    }

    const {empid, password} = parsedData.data;

    try{
        const client = await connectionEstablished();
        if(!client) return NextResponse.json("Client Not found!", {status: 400});
        const query = `SELECT * FROM "Employee" WHERE empid = $1;`
        const values = [empid];

        const resp = await client.query(query, values);

        client.end();

        const user = resp.rows[0];

        if(!user){
            return NextResponse.json("Employee not found!", {status: 410});
        }

        if(user.password !== password){
            return NextResponse.json("Incorrect Password!", {status: 400});
        }

        const payload = {
            empid: user?.empid,
            firstname: user?.firstname,
            lastname: user?.lastname,
            email: user?.email,
            phone: user?.mobile,
            role : user?.role
        }

        const token = jwt.sign(payload, jwtsecret);

        const cookieResponse = NextResponse.json("Logged in Successfully!", {status: 200});

        cookieResponse.cookies.set('EmpJWT', token, {
            maxAge: 60 * 60 * 24 * 7, 
            httpOnly: true,
            secure: true
        })

        return cookieResponse;


    }catch(err){
        console.log(err)
        return NextResponse.json(err, {status: 400});

    }

}