import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Yen-Jung, Chen",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "0912447440",
  },
  {
    icon: <MailIcon size={20} />,
    text: "jacky010080@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 7 April, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "National Taiwan University",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Taipei, Beitou Shipai",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "National Taiwan University",
        qualification: "Bachelor of Public Health",
        years: "2019 - 2023",
      },
    ]
  },
  {
    title: "experience",
    data: [
      {
        company: "AppWorks School",
        role: "Campus Web Development Fundamentals 2023",
        years: "2023 - 2023",
      },
      {
        company: "Udemy",
        role: "2023 網頁全端開發",
        years: "2023 - 2023",
      },
      {
        company: "六角學院",
        role: "Vue直播班",
        years: "2022 - 2023",
      },
    ]
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Javascript",
      },
      {
        name: "Bootstrap 5, Tailwind CSS",
      },
      {
        name: "Vue.js",
      },
      {
        name: "React.js, Next.js",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];

export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:[860px] pb-12 py-10 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg containerStyles="flex items-center justify-center bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/developer.png" />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Something About Myself</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Although I am not a computer science major, I have been learning through various self-study ways, starting from the basics of HTML, CSS, and JavaScript, and progressing to advanced frameworks like Vue.js and React.js. I have been learning continuously up to the present.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language</div>
                      <div className="border-b border-border"></div>
                      <div>English, Chinese</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What Skill I Have</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills").data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <div className="font-medium">{name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image src={imgPath} width={48} height={48} alt="" priority />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}