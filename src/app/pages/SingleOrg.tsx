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
import ProjectsSection from "@/components/singleorg/ProjectsSection";

interface pageProps {}

const SingleOrg: FC<pageProps> = ({ orgData }) => {
  // Function That will render Icons acording to socials
  const getIcon = (key: string) => {
    switch (key) {
      case "Chat":
        return <MessageCircleMore className="text-blue-500" />;
        break;
      case "Mailing list / Forum":
        return <MailboxIcon className="text-blue-500" />;
        break;
      case "Email":
        return <Mail className="text-blue-500" />;
        break;
      case "Twitter":
        return <Twitter className="text-blue-500" />;
        break;
      case "Blog":
        return <NewspaperIcon className="text-blue-500" />;
        break;
      case "IRC":
        return <MessageCircleMore className="text-blue-500" />;
        break;

      default:
        break;
    }
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
                    <span>{technology}, </span>
                  ))}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Topics</h3>
                <p className="mt-2 text-sm">
                  {orgData.topics.map((topic) => (
                    <span>{topic}, </span>
                  ))}
                </p>
              </div>
              <a
                className="block mt-4 text-blue-600"
                href={orgData.websiteURL}
                target="__blank"
              >
                {orgData.websiteURL}
              </a>
            </div>

            <div>
              {/* Socials */}
              <div className="flex flex-col w-full gap-2 p-4 px-8 rounded-md shadow-md bg-white min-w-[20rem]">
                {Object.keys(orgData.socials).map((key) => (
                  <div key={key} className="flex items-center gap-3">
                    <div>{getIcon(key)}</div>
                    <Link
                      className="font-medium text-blue-500"
                      href={orgData.socials[key]}
                      target="__blank"
                    >
                      {key}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <ProjectsSection projects={orgData.projects} />
      </div>
    </div>
  );
};

export default SingleOrg;
