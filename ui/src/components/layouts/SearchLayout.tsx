import React, { ReactNode } from "react";

interface SearchLayoutProps {
  children: ReactNode;
}

const SearchLayout: React.FC<SearchLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {children}
    </div>
  );
};

export default SearchLayout;
