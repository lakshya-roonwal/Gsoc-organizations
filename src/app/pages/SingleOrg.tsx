"use client";
import { Button } from "@/components/ui/button";
import { MailIcon, TextIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from "react";
import Link from "next/link";
import {SingleOrg} from '@/types/types'
import { redirect } from 'next/navigation'

// Icons
import {
  MessageCircleMore,
  Mail,
  Twitter,
  NewspaperIcon,
  MailboxIcon,
  Lightbulb, 
  User,
} from "lucide-react";
import ProjectsSection from "@/components/singleorg/ProjectsSection";
import { Badge } from "@/components/ui/badge";

interface pageProps {
  orgData:SingleOrg;
}

const SingleOrg: FC<pageProps> = ({ orgData }) => {
  // Function That will render Icons acording to socials
  const getLink = (key: string,link:string) => {
    switch (key) {
      case "irc_channel":
        return <Link className="font-medium text-blue-500 flex items-center gap-3"
        href={link}
        target={"__blank"}
        >
        <MessageCircleMore className="text-blue-500" />
        Chat
        </Link>
        break;
      case "mailing_list":
        return         <Link className="font-medium text-blue-500 flex items-center gap-3"
        href={link}
        target={"__blank"}
        >
        <MailboxIcon className="text-blue-500" />
        Mailing List / Forum
        </Link>
        break;
      case "contact_email":
        return <Link className="font-medium text-blue-500 flex items-center gap-3"
        href={link}
        target={"__blank"}
        >
        <Mail className="text-blue-500" />
        Email
        </Link>
        break;
      case "twitter_url":
        return <Link className="font-medium text-blue-500 flex items-center gap-3"
        href={link}
        target={"__blank"}
        >
        <Twitter className="text-blue-500" />
        Twitter
        </Link>
        break;
      case "blog_url":
        return <Link className="font-medium text-blue-500 flex items-center gap-3"
        href={link}
        target={"__blank"}
        >
        <NewspaperIcon className="text-blue-500" />
        Blog
        </Link>
        break;
      case "ideas_url":
        return <Link className="font-medium text-blue-500 flex items-center gap-3"
        href={link}
        target={"__blank"}
        >
        <Lightbulb className="text-blue-500" />
        Ideas List
        </Link>
        break;
      case "guide_url":
        return <Link className="font-medium text-blue-500 flex items-center gap-3"
        href={link}
        target={"__blank"}
        >
        <User className="text-blue-500" />
        {key}
        </Link>
        break;
  
      default:
        break;
    }
  };

  return (
    <div>
    {orgData?<div className="min-h-screen ">
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
                <div className="flex flex-wrap gap-2">
                  {orgData.technologies.map((technology) => (
                    <Badge variant={"outline"} key={technology}>
                      {technology}
                      </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {orgData.topics.map((topic) => (
                    <Badge variant={"outline"} key={topic}>
                      {topic}
                      </Badge>
                  ))}
                </div>
              </div>
              <div>
              <a
                className="mt-4 text-blue-600"
                href={orgData.url}
                target="__blank"
              >
                {orgData.url}
              </a>
              </div>
            </div>

            <div>
              {/* Socials */}
              <div className="flex flex-col w-full gap-2 p-4 px-8 rounded-md shadow-md bg-white min-w-[20rem]">
                {Object.keys(orgData.socials).map((key) => (
                  orgData.socials[key].length>0?<div key={key} className="">
                    {getLink(key,orgData.socials[key])}
                  </div>:null
                ))}
              </div>
            </div>
          </div>
        </section>
        <ProjectsSection 
        projects={orgData.projects}
         />
      </div>:redirect('/404')}
    </div>
  );
};

export default SingleOrg;
