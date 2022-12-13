import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
interface props {
  toBeSearched: string;
}
const SearchBar: React.FC<props> = ({ toBeSearched }: props) => {
  return (
    <div className="bg-white p-2 rounded-full shadow-md">
      <input
        type="text"
        placeholder={`${toBeSearched} Ara`}
        className="bg-transparent outline-none text-gray-800 pl-1 "
      ></input>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="hover:cursor-pointer pr-1"
      />
    </div>
  );
};

export default SearchBar;
