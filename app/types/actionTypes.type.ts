import React from "react";

export type NavBarActionType = {
  type: "modal" | "external";
  name: string;
  url?: string;
  target?: string;
  children?: React.ReactNode;
};

export type NavBarActions = Array<NavBarActionType>;
