import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="text-xl font-semibold text-gray-800 mb-4">{text}</h1>;
};

export default Title;
