import React from "react";

interface SidebarContextType {
  sideBarItemActive: string;
  setSideBarActive: (active: string) => void;
}

export const SidebarContext = React.createContext<SidebarContextType>({
  sideBarItemActive: "",
  setSideBarActive: () => {},
});
