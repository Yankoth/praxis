import React from 'react';

interface NavButtonProps {
  text: string;
  active?: boolean;
  handleClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ text, active, handleClick }) => {
  return (
    <button
      type="button"
      className={`${
        active ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'
      } uppercase font-light rounded-full px-2 py-1 focus:outline-none`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default NavButton;
