import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectsSection = ({ projects }) => {
  const projectsData = Object.entries(projects)[0][1];
  return (
    <div>
      <Tabs defaultValue={Object.keys(projectsData).slice(0, -2)[0]}>
        <section className="w-full py-4 bg-[#F8F9FA]">
          <div className="projects max-w-7xl mx-auto my-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 my-4">
              Projects
            </h2>
            <div className="tabs w-full flex justify-center items-center">
              <TabsList className="flex mb-4">
                {Object.keys(projectsData).slice(0, -2).map((year) => {
                  return (
                    <div key={year}>
                      <TabsTrigger value={year}>{year}</TabsTrigger>
                    </div>
                  );
                })}
              </TabsList>
            </div>
            <div>
              {Object.keys(projectsData)
                .slice(0, -2)
                .map((year) => {
                  return (
                    <div key={year}>
                    {projectsData[year]["projects"].map((project) => {
                    return (
                      <TabsContent value={year} key={project.title}>
                        <div className="bg-white shadow rounded-lg p-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Contributor
                              </h3>
                              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                {project.student_name}
                              </p>
                            </div>
                          </div>
                          <h4 className="text-lg leading-6 font-semibold text-gray-900">
                            {project.title}
                          </h4>
                          <p className="mt-2 text-sm text-gray-500">
                            {project.short_description}
                          </p>
                          <div className="flex mt-5 gap-2">
                            <Button
                              asChild
                              className="bg-blue-500 hover:bg-blue-600 text-white"
                            >
                              <Link target="__blank" href={project.project_url}>
                                View project details
                              </Link>
                            </Button>
                            <Button
                              asChild
                              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                            >
                              <Link target="__blank" href={project.code_url}>
                                View code
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    );
                  })}
                    </div>
                  )
                })}
            </div>
          </div>
        </section>
      </Tabs>
    </div>
  );
};

export default ProjectsSection;
