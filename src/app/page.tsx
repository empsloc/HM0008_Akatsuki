import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper";
import ClubsContainer from "@/components/homeComponents/clubsContainer/ClubsContainer";
import CommunitiesContainer from "@/components/homeComponents/communitiesContainer/CommunitiesContainer";
import HeadingContainer from "@/components/homeComponents/headingContainer/HeadingContainer";
import Testimonials from "@/components/homeComponents/testimonials/Testimonials";
const baseURL = process.env.NEXTAUTH_URL
const getAllClubs = async () => {
  const res = await fetch(`${baseURL}/api/clubs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getAllCommunities = async () => {
  const res = await fetch(`${baseURL}/api/communities`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Home = async ()=> {
  const allclubs = await getAllClubs()
  const allCommunities = await getAllCommunities()

 
 
  return (
    
   <MaxWidthWrapper>
    <div className="mt-16">
        <HeadingContainer/>
    </div>

    <div className="mt-24">
      <ClubsContainer allclubs={allclubs} />
    </div>
    <div className="mt-24">
      <CommunitiesContainer allCommunities={allCommunities}  />
    </div>
   

    <div className="mt-24">
      <Testimonials/>
    </div>
    
    
   </MaxWidthWrapper>
  );
}

export default Home