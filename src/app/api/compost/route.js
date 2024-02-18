import prisma from "@/utils/connect"
import { NextResponse } from "next/server"
export const GET = async (req)=>{
    console.log(req.params)
    try{

        const communities = await prisma.community.findMany()

        return new NextResponse(JSON.stringify(
            req.params
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}