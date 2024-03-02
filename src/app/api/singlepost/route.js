import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("post_id");
    try{

        const singlePost = await prisma.post.findMany({
            where:{
                id:id
            }
        })
        console.log(singlePost)
        return new NextResponse(JSON.stringify(
            singlePost
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}