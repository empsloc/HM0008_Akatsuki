import { ArrowRight, Club } from "lucide-react"
import Image from "next/image"

const SingleClubContainer=()=>{
    return(
        <div className="">
            <div className="flex flex-col justify-center shadow-md rounded-xl dark:bg-slate-900 dark:shadow-black">
                <div className="relaive h-48 md:h-64 w-full  relative"><Image className="rounded-xl shadow-lg" src="/cesa.png" alt="" fill/></div>
                <div className="p-7 md:p-10 flex flex-col gap-5">
                    <div className="">CESA</div>
                    <div className="font-semibold text-2xl">Ipsum id dolor elit adipisicing pariatur </div>
                    <div className="flex justify-between">
                        <div className="font-medium flex gap-3"><div className=""><Club/></div><div className="">Register</div></div>
                        <div className="flex gap-3"><div className="">See More</div><div className=""><ArrowRight/></div></div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default SingleClubContainer