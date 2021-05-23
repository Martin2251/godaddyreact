import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

//the card of the api

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
    </div>
  );
}

function Card(props) {
  const name = props.api.name;
  // pick up the api.name
  return (
    //as it reads from the api.

    <div className="card">
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
// one state to return api list
function App() {
  const [listApi, setListApi] = useState([]);

  // its an array of data coming back and we want to display the characters

  // make a request as soon as you land on the page use Effect takes two argument and dependency list
  // using the api always fetch a response that is Json, I want the list of api which is(data)
  useEffect(function () {
    fetch("https://api.github.com/orgs/godaddy/repos")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setListApi(data);
      });
  }, []);

  // what the user sees, it will be map because the data comes back as an array
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/api/:name">
            <RepositoryPage></RepositoryPage>
          </Route>
          <Route to="/">
            <h1> Go Daddy Api</h1>
            <div className="card-container">
              {listApi.map(function (api) {
                return <Card api={api}></Card>;
              })}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
