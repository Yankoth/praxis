import React, { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className="pt-5">{children}</div>;
};

export default PageLayout;
