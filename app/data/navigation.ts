import type { NavLink } from "../../types/navigation";

export const headerLinks: NavLink[] = [
  {
    label: "Protection Services",
    to: "/services",
    children: [
      {
        label: "Workplace Violence Prevention",
        to: "/workplace-security",
        icon: "i-heroicons:building-office",
      },
      {
        label: "Schools",
        to: "/school-security",
        icon: "i-heroicons:academic-cap",
      },
      {
        label: "Religious Institutions",
        to: "/religious-security",
        icon: "i-mdi:church-outline",
      },
      {
        label: "High Profile Individuals",
        to: "/high-profile-security",
        icon: "i-dashicons:businessman",
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
