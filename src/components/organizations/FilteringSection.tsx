import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import MultiSelect from "@/components/organizations/MultiSelect";
import { useEffect, useState } from "react";
import { FilterDataAdvanced } from "filter-data-advanced/dist/FilterDataAdvanced";

const FilteringSection = ({organizations,setFilteredOrganizations}) => {
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

     const handleSearchQueryChange = (
       name: string,
       value: string | string[]
     ) => {
       setSearchQuery({
         ...searchQuery,
         [name]: value,
       });
     };

     let obj = new FilterDataAdvanced();

     useEffect(() => {
       // Name
       let orgFilterByName = obj.filterByKeyAndMultiValues(
         organizations,
         "name",
         [searchQuery.name]
       );
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

  return (
    <div className="flex flex-col gap-4 justify-between items-center mb-6">
      <div className="flex w-full justify-between">
        <Input
          className="border p-2 rounded-md w-1/3"
          placeholder="Search organizations, technology or topics"
        />
        <div>
          <label className="sr-only" htmlFor="sort">
            Sort by
          </label>
          <Select>
            <SelectTrigger id="sort">
              <SelectValue placeholder="A-Z" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="a-z">A-Z</SelectItem>
              <SelectItem value="z-a">Z-A</SelectItem>
              <SelectItem value="random">Random</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between w-full space-x-2">
        <MultiSelect
          selectList={yearsList}
          selected={years}
          setSelected={setYears}
        />
        <MultiSelect
          selectList={technologiesList}
          selected={technologies}
          setSelected={setTechnologies}
        />
        <MultiSelect
          selectList={topcisList}
          selected={topics}
          setSelected={setTopics}
        />
      </div>
    </div>
  );
};

export default FilteringSection;
