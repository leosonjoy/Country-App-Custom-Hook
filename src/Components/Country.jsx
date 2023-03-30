import React from "react";

import style from "./country.module.css";

const Country = (props) => {
  const { flags, name, capital, population, area } = props.country.country;
  const handleRemove = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag} />
        <h2>{name.common}</h2>
        <p>Official Name: {name.official}</p>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <button
          onClick={() => {
            handleRemove(name.common);
          }}
          className={style.btn}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
