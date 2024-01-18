import { Button } from '@/components/ui/button';
import { MailIcon, TextIcon } from 'lucide-react';import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <div className="min-h-screen ">
        {/* Header Section With Org. Name */}
        <main className="px-4 py-20 bg-[#0079ff]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold text-white">
              52° North Spatial Information Research GmbH
            </h2>
            <p className="mt-4 text-white">
              Innovative ideas & technologies in geoinformatics
            </p>
            <Button className="mt-8 bg-white text-[#0079ff]">
              View ideas list
            </Button>
          </div>
        </main>
        {/* Mid Section With Org Details */}
        <section className="bg-white text-black rounded-t-3xl pt-10 pb-20 px-4">
          <div className="max-w-6xl mx-auto flex justify-between gap-10">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-semibold">Technologies</h3>
                <p className="mt-2 text-sm">
                  javascript, android, java, web services, ogc standards
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Topics</h3>
                <p className="mt-2 text-sm">
                  citizen science, spatial information infrastructures, open
                  standards, data analytics, GeoInformation
                </p>
              </div>
              <a className="block mt-4 text-blue-600" href="#">
                https://52north.org/software/contribute/
              </a>
            </div>

            <div>
              {/* Socials */}
              <div className="flex flex-col space-y-4">
                <Button
                  className="flex items-center justify-between"
                  variant="outline"
                >
                  Mailing list / Forum
                  <MailIcon className="text-[#0077cc]" />
                </Button>
                <Button
                  className="flex items-center justify-between"
                  variant="outline"
                >
                  Chat
                  <TextIcon className="text-[#0077cc]" />
                </Button>
                <Button
                  className="flex items-center justify-between"
                  variant="outline"
                >
                  Email
                  <MailIcon className="text-[#0077cc]" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section with Org. Projects */}
        <Tabs defaultValue="project1">
          <section className="w-full py-4 bg-[#F8F9FA]">
            <div className="projects max-w-7xl mx-auto my-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 my-4">
                Projects
              </h2>
              <div className="tabs w-full flex justify-center items-center">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="account">2022</TabsTrigger>
                  <TabsTrigger value="password">2023</TabsTrigger>
                </TabsList>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Contributor
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Ashwanth Kumar D
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Mentor
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Christian Danowski-Buhren
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Organization
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      52°North Spatial Information Research GmbH
                    </p>
                  </div>
                </div>
                <h4 className="text-lg leading-6 font-semibold text-gray-900">
                  KomMonitor Web Client: Migration to Angular
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  KomMonitor is an open-source web client developed by the
                  Bochum University of Applied Sciences as a research project.
                  It has been developed in...
                </p>
                <div className="flex mt-5 gap-2">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    View project details
                  </Button>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800">
                    View code
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </Tabs>
      </div>
    </div>
  );
}

export default page