// import logo from './logo.svg';
// import './App.css';

import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";

import { store } from "./store";

import Layout from "./components/layout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
