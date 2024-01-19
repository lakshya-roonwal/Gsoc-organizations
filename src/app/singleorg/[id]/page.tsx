"use client";
import { Button } from "@/components/ui/button";
import { MailIcon, TextIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from "react";
import Link from "next/link";

// Icons
import {
  MessageCircleMore,
  Mail,
  Twitter,
  NewspaperIcon,
  MailboxIcon,
} from "lucide-react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {

  const getIcon=(key:string)=>{
    switch (key) {
      case "Chat":
        return <MessageCircleMore  className="text-blue-500"/>;
        break;
      case "Mailing list / Forum":
        return <MailboxIcon className="text-blue-500" />;
        break;
      case "Email":
        return <Mail  className="text-blue-500"/>;
        break;
      case "Twitter":
        return <Twitter  className="text-blue-500"/>;
        break;
      case "Blog":
        return <NewspaperIcon  className="text-blue-500"/>;
        break;
      case "IRC":
        return <MessageCircleMore  className="text-blue-500"/>;
        break;

      default:
        break;
    }
  }

  const orgData = {
    name: "XMPP Standards Foundation",
    description: " XSF develops an open-standard messaging protocol ",
    imageUrl:
      "https://summerofcode.withgoogle.com/media/org/xmpp-standards-foundation/1qfi0ofcfmb8qin8-360.png",
    years: ["2023", "2022", "2020", "2019", "2017", "2017"],
    technologies: [
      " swift",
      " Objective C",
      " python 3",
      " lua",
      "java",
      " vala",
      " xmpp",
      " java",
      " webrtc",
      " c++",
      " erlang",
      " dart",
      " asynchronous i/o",
      "vala",
      "javascript",
    ],
    topics: [
      " chat",
      " realtime communications",
      " WebRTC",
      " internet of things",
      "instant messaging",
      " Jingle",
      " Real-Time Communication",
      " realtime communication",
      " xmpp",
      " machine-to-machine",
      " communications",
      " voip",
      " social",
      " messaging",
    ],
    socials: {
      "Chat": "https://xmpp.org/chat#converse/room?jid=gsoc@muc.xmpp.org",
      "Mailing list / Forum": "https://mail.jabber.org/mailman/listinfo/gsoc",
      Email: "mailto:xsfcommteam@protonmail.com",
      Twitter: "https://fosstodon.org/@xmpp",
      Blog: "https://xmpp.org/blog/",
      "IRC": "https://wiki.xmpp.org/web/GSoC/2020#Join_the_group_chat.21",
    },
    websiteURL: "https://xmpp.org/",
    projects: [
      {
        "2023": [
          {
            contributor: "hrxi",
            mentor: "Marvin W., fiaxh_",
            projectTitle: "Windows Support for Dino",
            projectDescription:
              "This project aims to add Windows support to the previously Linux-only XMPP client Dino. Since Windows is installed on approximately 75% of all...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/programs/2023/projects/ygGSIiHc",
            viewProjectCodeURL:
              "https://hrxi.github.io/gsoc/blog/gsoc-2023-conclusion",
          },
          {
            contributor: "Ikjot Singh Dhody",
            mentor: "PapaTutuWawa",
            projectTitle: "Implement group chats in Moxxy",
            projectDescription:
              "Group chats are an integral component of instant messaging clients used in everyday communication. However, Moxxy, currently lacks support for group...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/programs/2023/projects/UK3oE0f9",
            viewProjectCodeURL:
              "https://moxxy.org/posts/2023-08-20-Moxxy-MUC-GSoC-Final-Report.html",
          },
        ],
      },
      {
        "2022": [
          {
            contributor: "Patiga",
            mentor: "Marvin W., fiaxh",
            projectTitle: "More flexibility in dino file transfers",
            projectDescription:
              "Resource-wise, messenger applications tend to be on the lightweight side of the spectrum. This drastically changes when file transfers are added to...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/programs/2022/projects/z9ixHTWZ",
            viewProjectCodeURL: "https://github.com/dino/dino/pull/1275",
          },
        ],
      },
      {
        "2020": [
          {
            contributor: "Aditya Borikar",
            mentor: "Florian Schmaus, Paul Schaub",
            projectTitle: "Websocket support IgniteRealtime Smack",
            projectDescription:
              "XMPP RFCs and Specifications define connection establishment over TCP, BOSH and websockets. Smack currently establishes connection between Server and...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2020/projects/6299365221597184",
            viewProjectCodeURL: "https://adiaholic.github.io/gsoc2020/",
          },
          {
            contributor: "wolfie_anmol",
            mentor: "Marvin W, fiaxh",
            projectTitle: "In-Band Real Time Texting",
            projectDescription:
              "This project aims to implement Real-Time Texting in Dino so as to increase the interactiveness of traditional texting by previewing message to the...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2020/projects/5173650568773632",
            viewProjectCodeURL: "https://github.com/dino/dino/pull/895",
          },
        ],
      },
      {
        "2019": [
          {
            contributor: "Madhur Garg",
            mentor: "Maxime Buquet",
            projectTitle:
              "Poezio: Infinite scrolling using MAM and General Improvement",
            projectDescription:
              "This project intends to improve the overall functionality of Poezio by implementing \u201cInfinite scrolling using Message Archive Management (MAM)\u201d and...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2019/projects/6478437231886336",
            viewProjectCodeURL:
              "https://gist.github.com/Madhur96/98cde10cd5f9d868b8dc22cb06b2e9c2#file-gsoc_19-md",
          },
          {
            contributor: "Jo\u00e3o Duarte",
            mentor: "Matthew Wild",
            projectTitle: "Prosody Plugin Installer",
            projectDescription:
              "A tool to manage Prosody's community modules. It allows to install, remove, update and list plugins. A mercurial repository is developed in order to...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2019/projects/4544465266540544",
            viewProjectCodeURL:
              "https://gsoc-prosody-2019.blogspot.com/2019/08/final-gsoc-report-prosody-plugin.html",
          },
          {
            contributor: "hrxi",
            mentor: "Marvin W, fiaxh",
            projectTitle: "Jingle File Transfer Support for Dino",
            projectDescription:
              "In addition to the already implemented file transfer via HTTP upload, add support for peer-to-peer file transfers via Jingle.",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2019/projects/6548707745464320",
            viewProjectCodeURL: "https://hrxi.github.io/gsoc/blog/the-end",
          },
        ],
      },
      {
        "2017": [
          {
            contributor: "Pawe\u0142 Alameyo \u015acibiorski",
            mentor: "Guus der Kinderen",
            projectTitle: "Certificate management support for Spark",
            projectDescription:
              "The aim of the project is to provide to the Spark's users a tool for managing their Public Key Certificates. Currently the users can only decide if...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2017/projects/6661234564792320",
            viewProjectCodeURL: "https://alameyo.github.io/GSoC2017/",
          },
          {
            contributor: "vanitasvitae",
            mentor: "Florian Schmaus",
            projectTitle: "OMEMO encrypted Jingle implementation",
            projectDescription:
              "This is my proposal to implement Jingle file transfer in Smack utilizing my OMEMO implementation I made earlier this year as part of my bachelors...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2017/projects/6702837899722752",
            viewProjectCodeURL: "https://vanitasvitae.github.io/GSOC2017/",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <div className="min-h-screen ">
        {/* Header Section With Org. Name */}
        <main className="px-4 py-20 bg-[#0079ff]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold text-white">{orgData.name}</h2>
            <p className="mt-4 text-white">{orgData.description}</p>
          </div>
        </main>
        {/* Mid Section With Org Details */}
        <section className="bg-white text-black rounded-t-3xl pt-10 pb-20 px-4">
          <div className="max-w-6xl mx-auto flex justify-between gap-10 flex-col sm:flex-row">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-semibold">Technologies</h3>
                <p className="mt-2 text-sm">
                  {orgData.technologies.map((technology) => (
                    <span>{technology},</span>
                  ))}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Topics</h3>
                <p className="mt-2 text-sm">
                  {orgData.topics.map((topic) => (
                    <span>{topic},</span>
                  ))}
                </p>
              </div>
              <a className="block mt-4 text-blue-600" href="#">
                {orgData.websiteURL}
              </a>
            </div>

            <div>
              {/* Socials */}
              <div className="flex flex-col w-full gap-2 p-4 px-8 rounded-md shadow-md bg-white min-w-[20rem]">
                {Object.keys(orgData.socials).map((key) => (
                  <div key={key} className="flex items-center gap-3">
                    <div>
                      {getIcon(key)}
                    </div>
                    <Link
                      className="font-medium text-blue-500"
                      href={orgData.socials[key]}
                    >
                      {key}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section with Org. Projects */}
        <Tabs defaultValue={Object.keys(orgData.projects[0])[0]}>
          <section className="w-full py-4 bg-[#F8F9FA]">
            <div className="projects max-w-7xl mx-auto my-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 my-4">
                Projects
              </h2>
              <div className="tabs w-full flex justify-center items-center">
                <TabsList className="flex mb-4">
                  {orgData.projects.map((yearObject) => {
                    const year = Object.keys(yearObject)[0];
                    return (
                      <div key={year}>
                        <TabsTrigger value={year}>{year}</TabsTrigger>
                      </div>
                    );
                  })}
                </TabsList>
              </div>
              <div>
                {orgData.projects.map((yearObject) => {
                  const year = Object.keys(yearObject)[0];

                  return (
                    <div key={year}>
                      {yearObject[year].map((project) => (
                        <TabsContent value={year}>
                          <div className="bg-white shadow rounded-lg p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                  Contributor
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                  {project.contributor}
                                </p>
                              </div>
                              <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                  Mentor
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                  {project.mentor}
                                </p>
                              </div>
                            </div>
                            <h4 className="text-lg leading-6 font-semibold text-gray-900">
                              {project.projectTitle}
                            </h4>
                            <p className="mt-2 text-sm text-gray-500">
                              {project.projectDescription}
                            </p>
                            <div className="flex mt-5 gap-2">
                              <Button
                                asChild
                                className="bg-blue-500 hover:bg-blue-600 text-white"
                              >
                                <Link
                                  target="__blank"
                                  href={project.viewProjectDetailsURL}
                                >
                                  View project details
                                </Link>
                              </Button>
                              <Button
                                asChild
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                              >
                                <Link
                                  target="__blank"
                                  href={project.viewProjectCodeURL}
                                >
                                  View code
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </TabsContent>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
