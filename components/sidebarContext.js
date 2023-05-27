import { createContext, useContext, useState } from "react";

const OpenSidebar = createContext();
const SetOpenSidebar = createContext();

function Open() {
  return useContext(OpenSidebar);
}

function SetOpen() {
  return useContext(SetOpenSidebar);
}

export function useSidebar() {
  return [Open(), SetOpen()];
}

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);
  function ToggleSidebar() {
    setOpen(!open);
  }
  return (
    <OpenSidebar.Provider value={open}>
      <SetOpenSidebar.Provider value={ToggleSidebar}>
        {children}
      </SetOpenSidebar.Provider>
    </OpenSidebar.Provider>
  );
}
