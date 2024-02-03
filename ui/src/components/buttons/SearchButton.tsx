import React from "react";

interface SearchButtonProps {
  type: "submit" | "button";
}

const SearchButton: React.FC<SearchButtonProps> = ({ type }) => {
  return (
    <button
      type={type}
      className="w-1/4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 focus:outline-none"
    >
      Search
    </button>
  );
};

export default SearchButton;
