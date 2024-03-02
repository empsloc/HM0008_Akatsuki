"use client"
import { ThemeToggleButton } from "@/components/ThemeComponents/themeToggleButton/ThemeToggleButton"
import { Menu } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper"
import { AccountButton } from "./accountButton"

const Navbar=()=>{
    const {  data: session, status } = useSession();
    return(
        <MaxWidthWrapper>
        <div className=" py-5">
            <div className="grid grid-cols-2">
                <div className="col-span-1 flex items-center text-3xl font-bold">PCCOE CommunityConnect</div>
                
                <div className="col-span-1  md:hidden items-center gap-5 font-bold ">
               
                    <div className="flex items-center justify-end gap-5">
                    <div className="  flex justify-end items-center "><ThemeToggleButton/></div>
                        <Menu/>
                    </div>
                </div>
                <div className="col-span-1 hidden md:flex items-center gap-5 font-bold justify-end">
                <div className="  flex justify-end items-center mr-3"><ThemeToggleButton/></div>
                    <Link href="/"> <div className="">Home</div></Link>
                    <Link href="/communities"> <div className="">Communities</div></Link>
                    <Link href="/club">  <div className="">Clubs</div></Link>
                
                    {status==="authenticated"?(<AccountButton/>):(<Link href="/login"  className="">Login</Link>)}
                </div>
            </div>
        </div>
        </MaxWidthWrapper>
    )
}

export default Navbar