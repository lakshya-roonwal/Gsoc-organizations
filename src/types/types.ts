export interface OrganizationCardType {
  name: string;
  _id:string;
  description: string;
  image_url: string;
  years: string[];
  technologies: string[];
  topics: string[];
  category:string;
}

interface SingleProject {
  contributor: string;
  mentor: string;
  projectTitle: string;
  projectDescription: string;
  viewProjectDetailsURL: string;
  viewProjectCodeURL: string;
}

interface Projects {
  [key: string]: SingleProject[];
}

export interface SingleOrg {
  name: string;
  description: string;
  image_url: string;
  url:string;
  years: string[];
  technologies: string[];
  topics: string[];
  socials: any;
  projects: Projects[];
}