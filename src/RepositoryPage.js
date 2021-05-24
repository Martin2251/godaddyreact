import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function RepositoryPage(props) {
  const { name } = useParams(); // the path will be /repo/:name

  const [repoInfo, setRepoInfo] = useState({});

  useEffect(function () {
    fetch(`https://api.github.com/repos/godaddy/${name}`)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setRepoInfo(data);
      });
  }, []);

  return (
    //as it reads from the api.

    <div className="card">
      <h4>Api Name: {repoInfo.name}</h4>
      <p>Forks: {repoInfo.forks_count}</p>
      <p>Open Issues: {repoInfo.open_issues}</p>
      <p>Language: {repoInfo.language} </p>
      <p>Link to Github: {repoInfo.html_url} </p>
      <p>Description: {repoInfo.description}</p>
      <p>Watchers: {repoInfo.watchers}</p>
      <p>Forks Count: {repoInfo.forks_count}</p>
    </div>
  );
}

export default RepositoryPage;
