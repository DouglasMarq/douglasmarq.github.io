import AboutModal from "../components/Modals/About";
import ProjectsModal from "../components/Modals/Projects";
import { NavBarActions } from "../types";
import { LINKEDIN_URL } from "./links";

export const NavBarAction: NavBarActions = [
  {
    type: "modal",
    name: "About",
    children: <AboutModal />,
  },
  {
    type: "modal",
    name: "Projects",
    children: <ProjectsModal />,
  },
  {
    type: "external",
    name: "Resume",
    url: LINKEDIN_URL,
    target: "_blank",
  },
];
