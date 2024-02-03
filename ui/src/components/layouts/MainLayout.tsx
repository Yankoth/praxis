import React from "react";
// import Navbar from "@/components/Navbar.tsx";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-3/4 md:w-1/2">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
