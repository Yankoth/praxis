import React from 'react';

interface SubTitleProps {
  text: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return <h1 className="text-md font-semibold text-gray-800 mb-4">{text}</h1>;
};

export default SubTitle;
