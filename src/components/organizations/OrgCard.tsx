import { FC } from "react";
import { OrganizationCardType } from "@/types/types";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
    <Card className="w-full shadow-sm">
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
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Technologies</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {technologies.map((technology) => {
              return <Badge>{technology}</Badge>;
            })}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Years</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {years.map((year) => {
              return <Badge>{year}</Badge>;
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link className="text-blue-600 hover:underline" href={`/singleorg/${_id}`}>
          Learn more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OrgCard;
