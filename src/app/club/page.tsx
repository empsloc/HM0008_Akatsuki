"use client"
import ClubHeadingContainer from "@/components/clubPageComponents/ClubHeadingContainer/ClubHeadingContainer"
import AboutTeam from "@/components/clubPageComponents/aboutTeam/AboutTeam"
import OnGoingEvent from "@/components/clubPageComponents/ongoingEvents/OngoingEvent"
import RegisterButton from "@/components/clubPageComponents/registerButton/RegisterButton"
import Subclubs from "@/components/clubPageComponents/subclubs/Subclubs"
import VolunteerRegistration from "@/components/clubPageComponents/volunteerRegistration/VolunteerRegistration"
import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper"
import { useSearchParams } from 'next/navigation'
const ClubPage = ()=>{
    const searchParams = useSearchParams()

    const search = searchParams.get('club')
    return(
        <MaxWidthWrapper>
            <div className="">
                <ClubHeadingContainer/>
            </div>
            <div className="">
                <AboutTeam/>
            </div>
            <div className="mt-28">
                <OnGoingEvent/>
            </div>

            <div className="mt-28">
                <RegisterButton/>
            </div>
            <div className="mt-28">
                <Subclubs/>
            </div>
            <div className="mt-28">
                <VolunteerRegistration/>
            </div>

        </MaxWidthWrapper>
    )
}

export default ClubPage