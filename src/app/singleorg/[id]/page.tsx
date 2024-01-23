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

const page: FC<pageProps> = ({}) => {
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

  const orgData = {
    name: "The Apertium Project",
    description: " A free/open-source rule-based machine translation platform ",
    imageUrl:
      "https://summerofcode.withgoogle.com/media/archive/5377487227846656.png",
    years: ["2016"],
    technologies: [
      " finite-state technologies",
      " perl",
      " xml",
      " c++",
      "python",
    ],
    topics: [
      " computer-aided translation",
      "natural language processing",
      " morphological analysis",
      " human language technologies",
      " machine translation",
    ],
    socials: {
      text: "https://lists.sourceforge.net/lists/listinfo/apertium-stuff",
    },
    websiteURL: "http://wiki.apertium.org",
    projects: [
      {
        "2016": [
          {
            contributor: "Kira",
            mentor: "Kevin Brubeck Unhammer, Jonathan W",
            projectTitle: "Apertium website improvements",
            projectDescription:
              "New features provide benefits both to Apertium users and Apertium team.\nApertium website users will get the improved tool which provides a new...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/5652720409116672",
            viewProjectCodeURL:
              "http://wiki.apertium.org/wiki/GSOC%2716_Kira%27s_results._Apertium_website_improvements",
          },
          {
            contributor: "frankier",
            mentor: "Mikel L. Forcada, Flammie, Francis Tyers",
            projectTitle:
              "Investigation of new ways to combining Constraint-grammar and apertium-tagger & a new averaged perception based tagger",
            projectDescription:
              "Many less resourced languages don\u2019t have a tagged corpus or only have a small amount of poorly tagged material. In such cases unsupervised learning...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/5669287574372352",
            viewProjectCodeURL:
              "http://wiki.apertium.org/wiki/Frankier/GSOC_2016_submission",
          },
          {
            contributor: "gianfro",
            mentor: "admamo, hectoralos, Francis Tyers",
            projectTitle: "Sardu, abbarra vivu!",
            projectDescription:
              "The project I intend to carry out is the creation of a MT engine for the language pair Italian-Sardinian based on the Apertium platform. As pointed...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/6136890327564288",
            viewProjectCodeURL:
              "https://apertium.projectjj.com/gsoc2016/gfro3d.html",
          },
          {
            contributor: "mgokirmak",
            mentor: "Vinit Ravishankar, Kevin Brubeck Unhammer",
            projectTitle: "Kurmanji (Kurdish)-English MT",
            projectDescription:
              "I propose to work on the Kurmanji-English language pair, with the aim of improving it to the state of the art level, in terms of coverage and...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/5069737520267264",
            viewProjectCodeURL:
              "http://wiki.apertium.org/wiki/Kurmanji_and_English/Final_report",
          },
          {
            contributor: "Maria Sheyanova",
            mentor: "Rob Reynolds, Francis Tyers",
            projectTitle: "Project: Adopting a language pair",
            projectDescription:
              "Currently the pol-rus language pair is in the beginning state (in the incubator). There are very few words in the bilingual dictionary and no rules....",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/5122107398684672",
            viewProjectCodeURL:
              "http://wiki.apertium.org/wiki/Polish_and_Russian/Project_description#Description_of_the_main_package_components",
          },
          {
            contributor: "Aidana",
            mentor: "Jonathan W, Aida Sundetova",
            projectTitle: "Adopt an unreleased Kazakh-English language pair",
            projectDescription:
              "These days the translating text automatically by using machine translation is very important, because it helps people from whole world to understand...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/4744168530247680",
            viewProjectCodeURL:
              "http://wiki.apertium.org/wiki/User:Aidana/Proposal/Working_plan#Report_of_GSoC_project",
          },
          {
            contributor: "Jaipal",
            mentor: "Mikel L. Forcada, Vinit Ravishankar",
            projectTitle: "Lint For Apertium",
            projectDescription:
              "My draft proposal for the Lint for Apertium project.",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/4902239969738752",
            viewProjectCodeURL:
              "https://gitlab.com/jpsinghgoud/apertium-lint/commits/master",
          },
          {
            contributor: "Junaid Ali",
            mentor: "Mikel L. Forcada, Kevin Brubeck Unhammer, Tino Didriksen",
            projectTitle: "Automatic Blank Handling",
            projectDescription:
              "Our current format handling is brittle, requiring transfer rules to explicitly deal with blanks, and some times inevitably outputting them in the...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/5791376851599360",
            viewProjectCodeURL:
              "https://apertium.projectjj.com/gsoc2016/junzayy.html",
          },
          {
            contributor: "Uliana Sentsova",
            mentor: "Ornela, Xavi Ivars",
            projectTitle:
              "Machine Translation for Sicilian-Spanish Language Pair",
            projectDescription:
              "The project goal is to create a machine translation package for Sicilian-Spanish language pair on the base of Apertium\u2019s machine translation system....",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/5883995808071680",
            viewProjectCodeURL:
              "http://wiki.apertium.org/wiki/Siciliano_y_castellano/Informe_final",
          },
          {
            contributor: "kvld",
            mentor: "Rob Reynolds, Francis Tyers, Trondtr",
            projectTitle: "New Belarusian-Russian language pair",
            projectDescription:
              "I propose to create Belarusian-Russian language pair.",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/5954603862458368",
            viewProjectCodeURL:
              "http://wiki.apertium.org/wiki/Belarusian_and_Russian/Final_report",
          },
          {
            contributor: "tiefling-cat",
            mentor: "Mikel L. Forcada, vmsanchez, Flammie, Francis Tyers",
            projectTitle: "Apertium Weighted Transfer Rules",
            projectDescription:
              "The idea of the task is to implement a mechanism of resolving transfer rule conflicts using previously obtained rule weights. The tool for obtaining...",
            viewProjectDetailsURL:
              "https://summerofcode.withgoogle.com/archive/2016/projects/5976116011466752",
            viewProjectCodeURL:
              "http://wiki.apertium.org/wiki/Weighted_transfer_rules_at_GSoC_2016",
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

export default page;
