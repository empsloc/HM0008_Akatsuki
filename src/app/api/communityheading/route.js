import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("community_id");
    console.log(req.params)
    try{

        const community = await prisma.community.findMany(
            {where :{id:id}}
            
        )
        // console.log(community)

        return new NextResponse(JSON.stringify(
            community
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}