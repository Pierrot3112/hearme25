import React, { useState } from "react";
import "../UserStyle/d.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ data, onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title);
    setSuggestions([]);
    onSelect(suggestion); // Envoyer la suggestion sélectionnée au parent
  };

  return (
    <div className="search-bar">
      <SearchIcon className="icon" />
      <input
        type="text"
        placeholder="Recherche..."
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
