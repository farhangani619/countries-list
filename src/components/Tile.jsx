import React from "react";
import { Link } from "react-router-dom";

function Tile(props) {
  return (
    <>
      <ul>
        <li>
          <span style={{ padding: 10, margin: 10 }}>{props.name}</span>
          <span style={{ padding: 10, margin: 10 }}>{props.currency}</span>
          <span style={{ padding: 10, margin: 10 }}>
            <img src={props.flag} alt="flag" height="20px" />
          </span>
          <Link
            to={{
              pathname: "/details",
              propData: {
                countryData: props.data,
              },
            }}
          >
            Details
          </Link>
        </li>
      </ul>
    </>
  );
}
export default Tile;
