import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[84vh xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="max-w-[600px] flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Front-end Developer</div>
            <h1 className="h1 mb-4">Hello, my name is Yen-Jung, Chen</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational journey, and what I engage in professionally.
            </p>
            <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a className={`${buttonVariants({ variant: "secondary" })} gap-x-2`} href='/CYJ_CV.pdf' download>
                Download CV <Download size={18} />
              </a>
            </div>
            <Socials 
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge 
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />} 
              endCountNum={2} 
              badgeText="Years Of Programming" 
            />
            <Badge 
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />} 
              endCountNum={6} 
              badgeText="Finished Projects" 
            />
            <Badge 
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />} 
              endCountNum={3}
              badgeText="Team Collaboration Experience" 
            />
            <div className="bg-hero_shape2_light dark:hero_shape w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc="/hero/developer.png" />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}