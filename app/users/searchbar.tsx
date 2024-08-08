import React from "react";
import { SearchBarInput } from "./styles";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <SearchBarInput
      type="text"
      placeholder="Search by name..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
