import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="form-control mt-4"
          type="search"
          placeholder="Search for a word"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
