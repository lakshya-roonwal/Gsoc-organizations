"use client";
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
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { OrganizationCardType } from "@/types/types";
import MultiSelect from "@/components/organizations/MultiSelect";
import FilteringSection from "@/components/organizations/FilteringSection";

export default function Organizations({ fetchedOrganizations }) {
  const [organizations, setOrganizations] =
    useState<OrganizationCardType[]>(fetchedOrganizations);
  const [filteredOrganizations, setFilteredOrganizations] =
    useState<OrganizationCardType[]>(organizations);

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div>
        {/* Header */}
        <div className="bg-[#0077FF] ">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="py-12 flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold mt-2 text-white">
                  All GSOC Organizations
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="max-w-7xl mx-auto my-4">
          {/* Filtering Section */}
          <FilteringSection
            organizations={organizations}
            setFilteredOrganizations={setFilteredOrganizations}
          />

          {/* Organizations Section */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {filteredOrganizations.map((organization) => {
              return (
                  <OrgCard
                    key={organization._id}
                    _id={organization._id}
                    name={organization.name}
                    description={organization.description}
                    image_url={organization.image_url}
                    years={organization.years}
                    technologies={organization.technologies}
                    topics={organization.topics}
                    category={organization.category}
                  />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
