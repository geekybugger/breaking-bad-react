import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header.js";
import CharacterGrid from "./components/characters/CharacterGrid.js";

const App = () => {
  const [items, setItems] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid isloading={isloading} items={items} />
    </div>
  );
};

export default App;
