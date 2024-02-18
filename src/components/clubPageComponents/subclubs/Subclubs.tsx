import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const Subclubs = () => {
  return (
    <div className="">
      <div className="text-3xl font-semibold">Clubs Provided by the Team</div>

      <div className="mt-20">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-xl font-bold">PCCOE ACM
</AccordionTrigger>
            <AccordionContent className="text-lg">
            PCCOE ACM is dedicated to advancing computing as a science and profession, providing resources and opportunities for students to explore their interests in computer science, network with industry professionals, and participate in events and activities related to technology and innovation.
            <div className="text-lg mt-10 font-semibold flex gap-3 items-center">Read More <ArrowRight/></div>

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-xl font-bold">GDSC
</AccordionTrigger>
            <AccordionContent className="text-lg">
            GDSC aims to provide students with the resources, training, and community they need to learn about Google technologies, build innovative projects, and connect with like-minded peers and industry professionals.Eiusmod magna occaecat consequat reprehenderit qui elit elit.
           
            <div className="text-lg mt-10 font-semibold flex gap-3 items-center">Read More <ArrowRight/></div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-xl font-bold">OWASP</AccordionTrigger>
            <AccordionContent className="text-lg">
            OWASP is committed to improving the security of software through community-led projects, resources, and educational initiatives. We aim to raise awareness about web application security issues and empower students to build secure software.Elit ex aliqua labore tempor enim incididunt commodo ex eu aliqua commodo.
            <div className="text-lg mt-10 font-semibold flex gap-3 items-center">Read More <ArrowRight/></div>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Subclubs;
