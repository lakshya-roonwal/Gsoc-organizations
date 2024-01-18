"use client"
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import OrgCard from "@/components/organizations/OrgCard";
import OrgData from '@/data/organizations.json'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { OrganizationCardType } from "@/types/types";
import MultiSelect from "@/components/organizations/MultiSelect";

export default function Organizations() {

  const [organizations, setOrganizations] = useState<OrganizationCardType[]>(OrgData)
    const [filteredOrganizations, setFilteredOrganizations] =
      useState<OrganizationCardType[]>(organizations);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
      null
    );

    // Function to filter organizations based on search term and selected technology
    const filterOrganizations = () => {
      let filteredOrgs = OrgData;

      // Filter by search term
      if (searchTerm.trim() !== "") {
        filteredOrgs = filteredOrgs.filter(
          (org) =>
            org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            org.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filter by selected technology
      if (selectedTechnology) {
        filteredOrgs = filteredOrgs.filter((org) =>
          org.technologies.includes(selectedTechnology)
        );
      }

      setFilteredOrganizations(filteredOrgs);
    };

    // Handle changes in the search bar
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    // Handle changes in the technology select
    const handleTechnologyChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setSelectedTechnology(
        event.target.value === "all" ? null : event.target.value
      );
    };

    // Apply filters when search term or selected technology changes
    useEffect(() => {
      filterOrganizations();
    }, [searchTerm, selectedTechnology]);


  return (
    <div className="min-h-screen bg-gray-100 ">
      <div>
        <div className="bg-[#0077FF] ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6 flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold mt-2 text-white">
                  GSOC Organizations
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto my-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <Button className="text-xs" variant="secondary">
              All
            </Button>
            <Button className="text-xs" variant="ghost">
              2016
            </Button>
            <Button className="text-xs" variant="ghost">
              2017
            </Button>
            <Button className="text-xs" variant="ghost">
              2018
            </Button>
            <Button className="text-xs" variant="ghost">
              2019
            </Button>
            <Button className="text-xs" variant="ghost">
              2020
            </Button>
            <Button className="text-xs" variant="ghost">
              2021
            </Button>
            <Button className="text-xs" variant="ghost">
              2022
            </Button>
            <Button className="text-xs" variant="ghost">
              2023
            </Button>
          </div>
          <div className="flex justify-between items-center mb-6">
            <Input
              className="border p-2 rounded-md w-1/3"
              placeholder="Search organizations, technology or topics"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            <div className="flex items-center space-x-2">
              <div className="flex space-x-4">
                <Select>
                  <SelectTrigger id="technologies">
                    <SelectValue placeholder="Technologies" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="web-services">Web Services</SelectItem>
                    <SelectItem value="ogc-standards">OGC Standards</SelectItem>
                    <SelectItem value="web">Web</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger id="topics">
                    <SelectValue placeholder="Topics" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="geoinformatics">
                      Geoinformatics
                    </SelectItem>
                    <SelectItem value="sensor-web">Sensor Web</SelectItem>
                    <SelectItem value="web-based-geoprocessing">
                      Web-based Geoprocessing
                    </SelectItem>
                    <SelectItem value="spatial-data-infrastructures">
                      Spatial Data Infrastructures
                    </SelectItem>
                    <SelectItem value="spatial-information">
                      Spatial Information
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

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
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
      </div>
    </div>
  );
}
