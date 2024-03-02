import prisma from "@/utils/connect"
import { NextResponse } from "next/server"
export const GET = async ()=>{

    try{
        
        const communities = await prisma.community.findMany()

        return new NextResponse(JSON.stringify(
            communities
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}