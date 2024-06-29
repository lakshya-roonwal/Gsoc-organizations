import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { OrganizationCardType } from "@/types/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const OrgCard: FC<OrganizationCardType> = ({
  name,
  description,
  image_url,
  years,
  technologies,
  _id,
  topics,
  category,
}: OrganizationCardType) => {
  return (
    <Card className="w-full shadow-sm flex flex-col">
      <CardHeader>
        <img
          alt={description}
          className="h-24 object-contain max-w-full align-middle"
          src={image_url}
        />
      </CardHeader>
      <CardContent>
        <div className="category w-full flex justify-center">
        <Badge variant={"outline"}>{category}</Badge>
        </div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Technologies</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {technologies.map((technology) => {
              return <Badge variant={"secondary"} key={technology}>{technology}</Badge>;
            })}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Years</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {years.map((year) => {
              return <Badge variant={"secondary"} key={year}>{year}</Badge>;
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter className="">
        <Link className="flex items-center gap-2 py-2 px-4 rounded-md text-white bg-[#0077FF] hover:bg-[rgb(0,119,235)]" href={`/singleorg/${_id}`}>
            More Info
          <ChevronRight size={"18px"}/>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OrgCard;
