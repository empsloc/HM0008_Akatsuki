import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("postId");
    try{

        const postData = await prisma.post.findMany({
            where:{
                id:id
            },

            include:{
                user:true
            }
        })
        // console.log(singlePost)
        return new NextResponse(JSON.stringify(
            postData
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}