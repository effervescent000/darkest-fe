// import logo from './logo.svg';
// import './App.css';

import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";

import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
