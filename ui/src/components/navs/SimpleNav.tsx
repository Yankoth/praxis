import React from 'react';
import NavButton from '../buttons/NavButton';

interface SimpleNavProps {
  titles: string[];
  activeNav: string;
  setActiveNav: (title: string) => void;
}

const SimpleNav: React.FC<SimpleNavProps> = ({
  titles,
  activeNav,
  setActiveNav,
}) => {
  return (
    <div className="flex gap-2 mb-5 mx-1">
      {titles.map((title) => (
        <NavButton
          key={`nav-${title}`}
          text={title}
          active={activeNav === title}
          handleClick={() => setActiveNav(title)}
        />
      ))}
    </div>
  );
};

export default SimpleNav;
