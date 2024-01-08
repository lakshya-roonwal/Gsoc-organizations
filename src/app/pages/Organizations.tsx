import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import OrgCard from "@/components/organizations/OrgCard";

export default function Organizations() {
    const OrgData = [
      {
        name: " 52\u00b0North Initiative for Geospatial Open Source Software GmbH ",
        description:
          " 52\u00b0North works on innovative ideas and technologies in geoinformatics. ",
        imageUrl:
          "https://summerofcode.withgoogle.com/media/archive/4959751460880384.png",
        orgUrl:
          "https://summerofcode.withgoogle.com/archive/2017/organizations/4959751460880384",
        years: ["2017","2018","2023"],
        technologies: [
          "javascript",
          " java",
          " web services",
          " ogc standards",
          " web",
        ],
      },
      {
        name: " AboutCode ",
        description:
          " Open Source for Open Source: software license, origin and packages discovery ",
        imageUrl:
          "https://summerofcode.withgoogle.com/media/archive/6448304984424448.png",
        orgUrl:
          "https://summerofcode.withgoogle.com/archive/2017/organizations/6448304984424448",
        years: ["2017","2016"],
        technologies: [
          "python",
          " javascript",
          " c/c++",
          " shell script",
          " static analysis",
        ],
      },
    ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between">
          <div className="flex space-x-4">
            <Select>
              <SelectTrigger id="year">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="2017">2017</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
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
                <SelectItem value="geoinformatics">Geoinformatics</SelectItem>
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
          <Input
            className="w-1/4"
            placeholder="Search organizations"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {OrgData.map((organization)=>{
                return (
                  <OrgCard
                    key={organization.orgUrl}
                    name={organization.name}
                    description={organization.description}
                    imageUrl={organization.imageUrl}
                    orgUrl={organization.orgUrl}
                    years={organization.years}
                    technologies={organization.technologies}
                  />
                );
            })}
        </div>
      </div>
    </div>
  );
}
