"use client";

import React, { useEffect, useState } from "react";
import OrgData from "@/data/homepageorganizations.json";
import OrgCard from "@/components/organizations/OrgCard";
import { OrganizationCardType } from "@/types/types";

import { FilterDataAdvanced } from "filter-data-advanced/dist/FilterDataAdvanced";
import { Input } from "@/components/ui/input";
import MultiSelect from "@/components/organizations/MultiSelect";

const page = () => {
  const [organizations, setOrganizations] =
    useState<OrganizationCardType[]>(OrgData);
  const [filteredOrganizations, setFilteredOrganizations] = useState<
    OrganizationCardType[]
  >(organizations);
  const [searchQuery,setSearchQuery]=useState({
    name:"",
    years:[],
    technologies:[],
    topics:[],
  })
  const yearsList=[
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ]
  const technologiesList = [
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
  ];
  const topcisList = [
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
  ];

  const [years, setYears] = useState([])
  const [technologies, setTechnologies] = useState([])
  const [topics, setTopics] = useState([])

  const handleSearchQueryChange=(name:string,value:string|string[])=>{
    setSearchQuery({
      ...searchQuery,
      [name]:value,
    });
  }


  let obj = new FilterDataAdvanced();

  useEffect(() => {
    // Name
    let orgFilterByName = obj.filterByKeyAndMultiValues(organizations, "name", [
      searchQuery.name,
    ]);
    // Technologies
    console.log("orgFilterByName : ", orgFilterByName);
    let orgFilterByTechnologies = obj.filterByKeyAndMultiValues(
      orgFilterByName,
      "technologies",
      [""]
    );
    console.log("orgFilterByTechnologies : ", orgFilterByTechnologies);
    // Topic
    let orgFilterByTopics = obj.filterByKeyAndMultiValues(
      orgFilterByTechnologies,
      "topics",
      [""]
    );
    console.log("orgFilterByTopics : ", orgFilterByTopics);
    // Years
    let orgFilterByYears = obj.filterByKeyAndMultiValues(
      orgFilterByTopics,
      "years",
      ["2022"]
    );
    console.log("orgFilterByYears : ", orgFilterByYears);

    setFilteredOrganizations(orgFilterByYears);
  }, [searchQuery]);

  console.log("Years",years);

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="input-box">
        <Input
          value={searchQuery.name}
          onChange={(e) => {
            handleSearchQueryChange("name", e.target.value);
          }}
        />
        <div>
            {years.map((year)=>{
                return (<p>{year}</p>)
            })}
        </div>
        <div>
            {technologies.map((technology)=>{
                return (<p>{technology}</p>)
            })}
        </div>
        <div>
            {topics.map((topic)=>{
                return (<p>{topic}</p>)
            })}
        </div>
        <MultiSelect selectList={yearsList} selected={years} setSelected={setYears} />
        <MultiSelect selectList={technologiesList} selected={technologies} setSelected={setTechnologies} />
        <MultiSelect selectList={topcisList} selected={topics} setSelected={setTopics} />
      </div>
      <div className="w-1/2 mx-auto">
        {filteredOrganizations.map((organization) => {
          return (
            <OrgCard
              key={organization.imageUrl}
              name={organization.name}
              description={organization.description}
              imageUrl={organization.imageUrl}
              years={organization.years}
              technologies={organization.technologies}
              topics={organization.topics}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
