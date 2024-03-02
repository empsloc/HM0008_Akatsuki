import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req)=>{
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("club_id");
    try{

        const singleClub = await prisma.club.findMany({
            where:{
                id:id
            }
        })
        console.log(singleClub)
        return new NextResponse(JSON.stringify(
            singleClub
        ))

    }catch(err){
        console.log(err)

        return new NextResponse(JSON.stringify({
            message:"something went wrong"
        }))
    }
}