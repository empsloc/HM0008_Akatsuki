
import ClubHeadingContainer from "@/components/clubPageComponents/ClubHeadingContainer/ClubHeadingContainer"
import AboutTeam from "@/components/clubPageComponents/aboutTeam/AboutTeam"
import OnGoingEvent from "@/components/clubPageComponents/ongoingEvents/OngoingEvent"
import RegisterButton from "@/components/clubPageComponents/registerButton/RegisterButton"
import Subclubs from "@/components/clubPageComponents/subclubs/Subclubs"
import VolunteerRegistration from "@/components/clubPageComponents/volunteerRegistration/VolunteerRegistration"
import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper"

const baseURL = process.env.NEXTAUTH_URL;
const getData = async (clubId:any) => {
    
 
    
    const res = await fetch(`${baseURL}/api/getClubById?clubId=${clubId}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };

const ClubPage = async (props:any)=>{
  const clubData = await getData(props.searchParams.clubId)
 

    
    return(
        <MaxWidthWrapper>
            <div className="">
                <ClubHeadingContainer shortForm ={clubData[0].shortForm}/>
            </div>
            <div className="">
                <AboutTeam clubData = {clubData[0]} />
            </div>
            <div className="mt-28">
                <OnGoingEvent clubData = {clubData[0]} />
            </div>

            <div className="mt-28">
                <RegisterButton/>
            </div>
            <div className="mt-28">
                <Subclubs clubData={clubData[0]}/>
            </div>
            <div className="mt-28">
                <VolunteerRegistration/>
            </div>

        </MaxWidthWrapper>
    )
}

export default ClubPage