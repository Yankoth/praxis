import React, { ReactNode } from 'react';

interface CenterLayoutProps {
  children: ReactNode;
}

const CenterLayout: React.FC<CenterLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {children}
    </div>
  );
};

export default CenterLayout;
