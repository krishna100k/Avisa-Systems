import { NextResponse, NextRequest } from "next/server";
import { jwtVerify, JWTPayload} from "jose";


const jwtSecret = process.env.jwtsecret as string



const verifyJWT = async (token : string) => {
    const secret = new TextEncoder().encode(jwtSecret);
    const { payload } = await jwtVerify(token, secret);
    return payload;
}


export const middleware = async (req: NextRequest) => {
    const url = req.nextUrl.clone();
    url.pathname = "/employee";

    const path = req.nextUrl.pathname;

    const cookie = req.cookies.get("EmpJWT");
    const token = cookie?.value;

    if(path === "/employee"){
        url.pathname = "/empadmin/projectregistrationform"
        if(!token){
            return NextResponse.next();
        }else{
            return NextResponse.redirect(url);
        }
    }

    if(!token){
        return NextResponse.redirect(url);
    }

    const payload : any = await verifyJWT(token);

    if(!payload){
        return NextResponse.redirect(url);
    }

    if(path === "/api/employeeDetails"){
        return NextResponse.json(payload, {status: 200});
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/empadmin/projectregistrationform", "/employee", "/api/employeeDetails"]
  };