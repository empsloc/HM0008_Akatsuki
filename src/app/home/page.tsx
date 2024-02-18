import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper";
import ClubsContainer from "@/components/homeComponents/clubsContainer/ClubsContainer";
import CommunitiesContainer from "@/components/homeComponents/communitiesContainer/CommunitiesContainer";
import HeadingContainer from "@/components/homeComponents/headingContainer/HeadingContainer";
import Testimonials from "@/components/homeComponents/testimonials/Testimonials";

export default function Home1() {
  return (
    
   <MaxWidthWrapper>
    <div className="mt-16">
        <HeadingContainer/>
    </div>
    <div className="mt-24">
      <CommunitiesContainer/>
    </div>
    <div className="mt-24">
      <ClubsContainer/>
    </div>

    <div className="mt-24">
      <Testimonials/>
    </div>
    
    
   </MaxWidthWrapper>
  );
}