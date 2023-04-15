import React, { useState } from "react";
import { PintaPokemon } from "./PintaPokemon";
import "../App.css";

export function PeticionAPI() {
  const [pokeNombre, setPokeNombre] = useState("");
  const [pokeInfo, setPokeInfo] = useState(null);
  let dato = pokeInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeNombre}`
    );
    const data = await response.json();
    setPokeInfo(data);
    setPokeNombre("");
  };

  const handleInput = (e) => {
    setPokeNombre(e.target.value);
  };

  const formulario = () => {
    return (
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" value={pokeNombre} onChange={handleInput} />
      </form>
    );
  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" value={pokeNombre} onChange={handleInput} placeholder="Nombre o ID" />
      </form>
      <PintaPokemon dato={dato}  />
    </>
  );
}
