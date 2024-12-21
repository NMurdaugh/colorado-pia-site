import type { NavLink } from "../../types/navigation";

export const headerLinks: NavLink[] = [
  {
    label: "Protection Services",
    to: "/services",
    children: [
      {
        label: "Workplace Violence Prevention",
        to: "/workplace-security",
      },
      {
        label: "Schools",
        to: "/school-security",
      },
      {
        label: "Religious Institutions",
        to: "/religious-security",
      },
      {
        label: "High Profile Individuals",
        to: "/high-profile-security",
      },
    ],
  },
  {
    label: "Training",
    to: "/training",
  },
  {
    label: "About Us",
    to: "/about",
  },
];
