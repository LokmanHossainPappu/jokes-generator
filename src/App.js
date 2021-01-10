import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const API_URL = "http://api.icndb.com/jokes/random";

function App() {
  const [joke, setJoke] = useState("");
  const generatejoke = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJoke(data.value.joke));
  };
  useEffect(() => {
    generatejoke();
  }, []);

  return (
    <div className="boxs">
      <div className="box">
        <h1> Check Norries jokes Generator </h1>
        <p> {joke} </p>
        <button onClick={generatejoke}>Get new joke</button>
      </div>
    </div>
  );
}

export default App;
