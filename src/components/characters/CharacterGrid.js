import React from "react";
import CharacterItem from "../characters/CharacterItem";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
