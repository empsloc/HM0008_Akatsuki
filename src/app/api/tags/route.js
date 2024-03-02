import prisma from "@/utils/connect"
import { NextResponse } from "next/server"
export const GET = async ()=>{

    try{

        const tags = await prisma.tag.findMany()

        return new NextResponse(JSON.stringify(
            tags
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}