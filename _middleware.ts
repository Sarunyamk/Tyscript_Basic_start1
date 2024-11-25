import { NextResponse } from "next/server"

export const middleware =(req:Request)=>{
    console.log("middleware run")
    return NextResponse.redirect(new URL('/',req.url))

}

export const config = {
    matcher:['/about/:path*','/info/:path*']
}