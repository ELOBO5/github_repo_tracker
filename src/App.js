import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "./layout";
import { Welcome, User, Repo } from "./pages";
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/repo">
          <Repo />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
