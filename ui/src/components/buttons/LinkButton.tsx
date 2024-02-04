import React from 'react';

interface LinkButtonProps {
  text: string;
  url: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, url }) => {
  return (
    <a className="text-gray-800 underline m-2" href={url} target="_blank">
      {text}
    </a>
  );
};

export default LinkButton;
