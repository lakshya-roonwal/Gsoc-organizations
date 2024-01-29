import { technologiesList, topcisList } from '@/app/constants/filteringConstants';
import MultiSelect from "@/components/organizations/MultiSelect";
import { Input } from "@/components/ui/input";
import { FilterDataAdvanced } from "filter-data-advanced/dist/FilterDataAdvanced";
import { X } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Badge } from "../ui/badge";

interface FilteringSectionProps {
  // Have to fix them later
  organizations: any;
  setFilteredOrganizations: any;
}

const FilteringSection: FC<FilteringSectionProps> = ({ organizations, setFilteredOrganizations }) => {

  const [searchQuery, setSearchQuery] = useState({
    name: "",
    years: [],
    technologies: [],
    topics: [],
    category: "All",
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
  const categoryList = [
    "All",
    "Data",
    "Development tools",
    "End user applications",
    "Infrastructure and cloud",
    "Media",
    "Operating systems",
    "Programming languages",
    "Science and medicine",
    "Security",
    "Social and communication",
    "Web",
    "Other",
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
  const handleCategoryChange = (category:string) => {
    setSearchQuery({
      ...searchQuery,
      ['category']: category,
    });
  };

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

    // Category
    if (searchQuery.category!=="All") {
      filtterOrgs = obj.filterByKeyValue(
        filtterOrgs,
        "category",
        searchQuery.category
      );
    }

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
      <div className="w-full flex-wrap gap-y-4 p-4 flex space-x-2 overflow-auto">
        {categoryList.map((category:string)=>{
            return (
              <button
              key={category}
              className={`rounded-full px-4 py-1 ${
                searchQuery.category === category ? 'bg-blue-500 text-white' : 'text-gray-700 bg-white hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
            )
        })}
      </div>
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
        {years.length > 0 ? (
          <div className="years">
            <div>
              <h3 className="mb-2 font-semibold text-lg text-gray-700">
                Years
              </h3>
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
          </div>
        ) : null}
        {technologies.length > 0 ? (
          <div className="technologies">
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
          </div>
        ) : null}
        {topics.length > 0 ? (
          <div className="topics">
            <div>
              <h3 className="mb-2 font-semibold text-lg text-gray-700">
                Topics
              </h3>
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
          </div>
        ) : null}
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row md:gap-8 w-full space-x-2">
        <MultiSelect
          selectList={yearsList}
          selected={years}
          setSelected={setYears}
          placeholder="Select Years"
        />
        <MultiSelect
          selectList={technologiesList}
          selected={technologies}
          setSelected={setTechnologies}
          placeholder="Select Technologies"
        />
        <MultiSelect
          selectList={topcisList}
          selected={topics}
          setSelected={setTopics}
          placeholder="Select Topics"
        />
      </div>
    </div>
  );
};

export default FilteringSection;
