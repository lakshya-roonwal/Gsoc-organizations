import MultiSelect from "@/components/organizations/MultiSelect";
import { Input } from "@/components/ui/input";
import { FilterDataAdvanced } from "filter-data-advanced/dist/FilterDataAdvanced";
import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "../ui/badge";
// import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
// import { Button } from "../ui/button";

const FilteringSection = ({ organizations, setFilteredOrganizations }) => {
  const [searchQuery, setSearchQuery] = useState({
    name: "",
    years: [],
    technologies: [],
    topics: [],
  });
  const yearsList = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
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

  const [years, setYears] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [topics, setTopics] = useState([]);

  const handleSearchQueryChange = (name: string, value: string | string[]) => {
    setSearchQuery({
      ...searchQuery,
      [name]: value,
    });
  };
  const handleUnselect = useCallback((selectList: selectList) => {
    setSelected((prev) => prev.filter((s) => s !== selectList));
  }, []);

  let obj = new FilterDataAdvanced();

  useEffect(() => {
    setSearchQuery({
      ...searchQuery,
      ["years"]: years,
      ["technologies"]: technologies,
      ["topics"]: topics,
    });
  }, [years, technologies, topics]);

  useEffect(() => {
    let filtterOrgs;
    // Name
    filtterOrgs = obj.filterByKeyAndMultiValues(organizations, "name", [
      searchQuery.name,
    ]);
    // Technologies
    if (technologies.length > 0) {
      filtterOrgs = obj.filterByKeyAndMultiValues(
        filtterOrgs,
        "technologies",
        searchQuery.technologies
      );
    }
    // Topic
    if (topics.length > 0) {
      filtterOrgs = obj.filterByKeyAndMultiValues(
        filtterOrgs,
        "topics",
        searchQuery.topics
      );
    }
    // Years
    if (years.length > 0) {
      filtterOrgs = obj.filterByKeyAndMultiValues(
        filtterOrgs,
        "years",
        searchQuery.years
      );
    }

    // Sorting

    setFilteredOrganizations(filtterOrgs);
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-4 justify-between items-center mb-6">
      <div className="flex w-full justify-between">
        <Input
          className="border p-2 rounded-md md:w-1/3"
          placeholder="Search organizations, technology or topics"
          value={searchQuery.name}
          onChange={(e) => {
            handleSearchQueryChange("name", e.target.value);
          }}
        />
        <div></div>
      </div>

      {/* Filtering Lists */}
      <div className="flex  flex-col justify-start w-full gap-4">
        {years.length>0?<div className="years">
          <div>
            <h3 className="mb-2 font-semibold text-lg text-gray-700">Years</h3>
          </div>
          {years.map((selectList) => (
            <Badge key={selectList} variant="secondary">
              {selectList}
              <button
                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => {
                  setYears((prev) => prev.filter((s) => s !== selectList));
                }}
              >
                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
              </button>
            </Badge>
          ))}
        </div>:null}
        {technologies.length>0?<div className="technologies">
          <div>
            <h3 className="mb-2 font-semibold text-lg text-gray-700">
              Technologies
            </h3>
          </div>
          {technologies.map((selectList) => (
            <Badge key={selectList} variant="secondary">
              {selectList}
              <button
                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => {
                  setTechnologies((prev) =>
                    prev.filter((s) => s !== selectList)
                  );
                }}
              >
                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
              </button>
            </Badge>
          ))}
        </div>:null}
        {topics.length>0?<div className="topics">
          <div>
            <h3 className="mb-2 font-semibold text-lg text-gray-700">Topics</h3>
          </div>
          {topics.map((selectList) => (
            <Badge key={selectList} variant="secondary">
              {selectList}
              <button
                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => {
                  setTopics((prev) => prev.filter((s) => s !== selectList));
                }}
              >
                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
              </button>
            </Badge>
          ))}
        </div>:null}
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row md:gap-8 w-full space-x-2">
        <MultiSelect
          selectList={yearsList}
          selected={years}
          setSelected={setYears}
          handleUnselect={handleUnselect}
          placeholder="Select Years"
        />
        <MultiSelect
          selectList={technologiesList}
          selected={technologies}
          setSelected={setTechnologies}
          handleUnselect={handleUnselect}
          placeholder="Select Technologies"
        />
        <MultiSelect
          selectList={topcisList}
          selected={topics}
          setSelected={setTopics}
          handleUnselect={handleUnselect}
          placeholder="Select Topics"
        />
      </div>
    </div>
  );
};

export default FilteringSection;
