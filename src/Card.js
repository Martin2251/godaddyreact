import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const name = props.api.name;
  // pick up the api.name
  return (
    //as it reads from the api.

    <div className="card" data-cy={props.api.name}>
      <Link to={`/api/${name}`}>
        <h4>Api Name: {props.api.name}</h4>
        <p>Forks: {props.api.forks_count}</p>
        <p>Open Issues: {props.api.open_issues}</p>
        <p>Language: {props.api.language} </p>
        <p>Link to Github: {props.api.html_url} </p>
        <p>Description: {props.api.description}</p>
      </Link>
    </div>
  );
}

export default Card;
