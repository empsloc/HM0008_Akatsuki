import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("community_id");
    console.log(req.params)
    try{

        const posts = await prisma.post.findMany(
            {where :{communityId:id}}
            
        )
        console.log(posts)

        return new NextResponse(JSON.stringify(
            posts
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}