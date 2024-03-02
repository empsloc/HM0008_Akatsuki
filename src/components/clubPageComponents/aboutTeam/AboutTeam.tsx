
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";



const AboutTeam =  (props:any) => {
  
  
  return (
    <div className="">
      <div className="text-3xl font-semibold">About Team</div>

      <div className="grid lg:grid-cols-3 mt-10 gap-5 justify-between">
        <div className="col-span-2">
          <div className="">
           {props.clubData.aboutClub}
           
          {/* At the Computer Engineering Student Association (CESA), our mission is to foster a vibrant community of computer engineering students, providing them with resources, support, and opportunities for personal and professional growth. We aim to cultivate a collaborative environment where students can develop their skills, expand their networks, and explore their passion for technology. */}


          </div>
          <div className="text-xl font-semibold mt-5">
          President: {props.clubData.presidentName}
          </div>

          <div className="">
            {/* {props.clubData.presidentDetails} */}
          Prathamesh  is a senior computer engineering major with a passion for leadership and innovation. As President, he oversees the overall direction of CESA and works closely with the executive board to execute our mission and goals.
            
          </div>

          <div className="text-xl font-semibold mt-5">
          Vice President: {props.clubData.vicePresidentName}
          </div>

          <div className="">
            {/* {props.clubData.vicePresidentDetails} */}
          Mahima is a junior computer engineering student who brings a wealth of organizational skills and creativity to her role as Vice President. She assists the President in coordinating events, managing communication channels
            
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <div className="">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
               
                  <CarouselItem >
                    <div className="p-1">
                      <Card>
                      <CardContent className="flex flex-col aspect-square items-start justify-center p-6 gap-6">
                          <span className="text-4xl font-semibold">
                            Event Organization

                          </span>
                          CESA excels in organizing engaging events and activities 
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem >
                    <div className="p-1">
                      <Card>
                      <CardContent className="flex flex-col aspect-square items-start justify-center p-6 gap-6">
                          <span className="text-4xl font-semibold">
                            Spreading Awareness

                          </span>
                          CESA raises awareness about emerging technologies and industry trends within the field of computer engineering.
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-start justify-center p-6 gap-6">
                          <span className="text-4xl font-semibold">
                           Team Building

                          </span>
                          CESA facilitates team building among computer engineering students
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                 
                
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
