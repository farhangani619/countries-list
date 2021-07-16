import React from "react";
import { Redirect } from "react-router-dom";

function Details(props) {
  if (props.location.propData) {
    return (
      <>
        <ul>
          <h2>{props.location.propData.countryData.name}</h2>
          <li>
            <span>Capital : </span>
            <span>{props.location.propData.countryData.capital}</span>
          </li>
          <li>
            <span>Region:</span>
            <span>{props.location.propData.countryData.region}</span>
          </li>
          <li>
            <span>Population : </span>
            <span>{props.location.propData.countryData.population}</span>
          </li>
          <li>
            <span>Borders: </span>
            {props.location.propData.countryData.borders.map(
              (border, index) => {
                return <span>{border} ,</span>;
              }
            )}
          </li>
          <li>
            <span>Currency : </span>
            {props.location.propData.countryData.currencies.map(
              (currency, index) => {
                return (
                  <>
                    <span>
                      <span> code={currency.code} , </span>
                      <span> Name={currency.name} , </span>
                      <span> Symbol={currency.symbol} , </span>
                    </span>
                  </>
                );
              }
            )}
          </li>
          <li>
            <span>Languages spoken : </span>
            <span>Name = </span>
            {props.location.propData.countryData.languages.map(
              (language, index) => {
                return <span>{language.name}, </span>;
              }
            )}
          </li>
        </ul>
      </>
    );
  } else {
    return <Redirect to="/" />;
  }
}
export default Details;
