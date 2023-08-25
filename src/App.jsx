import React from "react";
import Cards from "./Cards";
import catArray from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      {catArray.map((cat) => (
        <Cards
          key={cat.name}
          img={cat.img}
          url={cat.url}
          name={cat.name}
          description={cat.description}
        />
      ))}
    </div>
  );
}

export default App;
