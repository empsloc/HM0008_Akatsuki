import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("postId");
    console.log(req.params)
    try{

        const comments = await prisma.comment.findMany(
            {where :{postId:id},  include: { user: true }}
            
        )
        // console.log(community)

        return new NextResponse(JSON.stringify(
            comments
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}