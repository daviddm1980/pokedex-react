import React from "react";
import { PeticionAPI } from "./components/PeticionAPI";

function App() {
  return (
    <div className="container">
      <h1>Pokedex</h1>
      <PeticionAPI />
    </div>
  );
}

export default App;
