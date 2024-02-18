"use client"
import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const LoginPage=()=>{

    const {data,status} = useSession()

    console.log(data,status)
    const router = useRouter()
    if(status==="loading"){
        return <MaxWidthWrapper>
        <div className="mt-16 md:mt-0">
            <div className="md:p-20 lg:p-40 p-7 flex items-center justify-center">
                Loading
            </div>

        </div>
    </MaxWidthWrapper>
    }

    if(status==="authenticated"){
        router.push("/")
    }
    return(
        <MaxWidthWrapper>
            <div className="mt-16 md:mt-0">
                <div className="md:p-20 lg:p-40 p-7 flex items-center justify-center">
                    <div className=" flex flex-col gap-10 bg-secondary dark:bg-gray-800 p-16 md:p-36 rounded">
                        <div onClick={()=>signIn("google")} className="p-4 md:p-6 lg:p-7 text-white bg-red-400 dark:bg-red-800 rounded font-semibold ">Sign in with Google</div>
                        <div className="p-4 md:p-6 lg:p-7 dark:bg-gray-900 bg-gray-400 text-white rounded font-semibold">Sign in with Github</div>
                        <div className="p-4 md:p-6 lg:p-7 dark:bg-blue-800 bg-blue-400 text-white rounded font-semibold">Sign in with Twitter</div>
                    </div>
                </div>

            </div>
        </MaxWidthWrapper>
    )
}

export default LoginPage