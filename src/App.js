import "./App.css";
import Card from "./Card";
import RepositoryPage from "./RepositoryPage";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
