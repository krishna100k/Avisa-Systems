import { NextRequest, NextResponse } from "next/server";

export const GET = (request:NextRequest) => {
    return NextResponse.json("Backend Connected!", {status: 200})
}

