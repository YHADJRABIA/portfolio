// useState holds the information useEffect runs the fetch call when the component mounts.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Item({ match }) {
  // Only runs when the component mounts
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const URL = `https://restcountries.eu/rest/v2/alpha/${match.params.id}`; // API URL
    const response = await fetch(URL);
    const data = await response.json(); // Fetching Data and converting it to JSON
    console.log(data);
    setItem(data);
  };

  return (
    <>
      <p>{item.nativeName}</p>{" "}
    </>
  );
}

export default Item;
