import { Book, BookA, GraduationCap, Home, PlayIcon, TrendingUp } from "lucide-react"

const SideMenu=()=>{
    return(
        <div className="">
            <div className="flex flex-col gap-5 p-5 rounded-l-xl shadow-md">
                <div className="flex  gap-3 items-center font-bold"><Home/>Home Web 3</div>
                <div className="flex  gap-3 items-center font-bold"><Book/>Topics</div>
                <div className="flex  gap-3 items-center font-bold"><TrendingUp/>Trending</div>

                <div className="flex  gap-3 items-center font-bold text-xl">Community</div>

                <div className="flex  gap-3 items-center font-bold"><Book/>Web 3</div>
                <div className="flex  gap-3 items-center font-bold"><Book/>Blockchain</div>
                <div className="flex  gap-3 items-center font-bold"><Book/>Web dev</div>

                <div className="flex  gap-3 items-center font-bold text-xl">Resources</div>

                <div className="flex  gap-3 items-center font-bold"><PlayIcon/>Video Library</div>
                <div className="flex  gap-3 items-center font-bold"><GraduationCap/>Experts</div>
                <div className="flex  gap-3 items-center font-bold"><BookA/>Knowledge Base</div>

                
            </div>
        </div>
    )
}

export default SideMenu