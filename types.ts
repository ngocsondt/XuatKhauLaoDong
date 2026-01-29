
export interface Program {
  id: string;
  title: string;
  country: string;
  description: string;
  benefits: string[];
  salaryRange?: string;
  requirements: string[];
  image: string;
  tag?: string;
  details: {
    duration: string;
    location: string;
    requirementsDetail: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}
