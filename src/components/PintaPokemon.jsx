import React from "react";
import "../App.css";

export function PintaPokemon(props) {
  const { dato } = props;

  return (
    <>
      {dato && (
        <div className="card-container">
          <div className="nombre">
            <p>{dato.name}</p>
          </div>
          <div className="imagen">
            <img src={dato.sprites.front_default} alt={dato.name} />
          </div>
          <div className="id">
            <p>Nº: {dato.id}</p>
          </div>
          <div className="tipos">
            {dato.types.map((t, index) => {
              return (
                <p key={index} className="tipo">
                  {t.type.name}
                </p>
              );
            })}
          </div>
          <div className="stats-container">
            {dato.stats.map((s, index) => {
              return (
                <div key={index} className="stats">
                  <p>{s.stat.name}</p>
                  <p className="base_stat">{s.base_stat}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
