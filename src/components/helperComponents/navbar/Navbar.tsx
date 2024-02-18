import { ThemeToggleButton } from "@/components/ThemeComponents/themeToggleButton/ThemeToggleButton"
import { Menu } from "lucide-react"
import Link from "next/link"
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper"

const Navbar=()=>{

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
                    <Link href="/"> <div className="">HomeL</div></Link>
                    <Link href="/communities"> <div className="">Communities</div></Link>
                    <Link href="/">  <div className="">Clubs</div></Link>
                
                    <Link href="/club"  className="">Login</Link>
                </div>
            </div>
        </div>
        </MaxWidthWrapper>
    )
}

export default Navbar