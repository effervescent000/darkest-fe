// import logo from './logo.svg';
// import './App.css';

import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";

import APIService from "./utils/api-service";
import { urls } from "./constants/constants";
import { userConstants } from "./constants/user.constants";

import Layout from "./components/layout";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.username) {
      APIService.GET(urls.CHECK, (response) =>
        dispatch({ type: userConstants.SET_USER, payload: response.data })
      );
    }
  }, [user]);

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
