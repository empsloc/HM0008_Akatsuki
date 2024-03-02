import { NextResponse } from "next/server";

export const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("post_id");
    const userEmail = searchParams.get("user_email")
    const details = searchParams.get("details")
    // console.log(req.params)
    try{

        const comment = await prisma.comment.create(
            {data:{details: details, postId:postId, userEmail:userEmail}}
            
        )
        // console.log(posts)

        return new NextResponse(JSON.stringify(
            comment
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}