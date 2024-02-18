import prisma from "@/utils/connect"
import { NextResponse } from "next/server"
export const GET = async ()=>{

    try{

        const clubs = await prisma.club.findMany()

        return new NextResponse(JSON.stringify(
            clubs
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}