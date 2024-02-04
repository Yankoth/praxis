import React from 'react';

interface SearchButtonProps {
  text: string;
  disabled?: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({ text, disabled }) => {
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 focus:outline-none"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SearchButton;
