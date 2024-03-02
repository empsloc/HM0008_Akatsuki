import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("communityId");
    try{

        const communityData = await prisma.community.findMany({
            where:{
                id:id
            }
        })
        
        return new NextResponse(JSON.stringify(
            communityData
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}