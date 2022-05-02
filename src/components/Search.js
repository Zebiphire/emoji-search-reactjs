import React from "react";

const Search = ({ searchEmoji }) => {
  return (
    <div className="header">
      <h1>😎 EmojiSearch 😎</h1>
      <input
        onChange={(event) => searchEmoji(event.target.value)}
        placeholder="What emoji are you looking for ?"
      ></input>
    </div>
  );
};

export default Search;
