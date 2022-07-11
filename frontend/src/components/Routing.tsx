import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import Page404 from "../pages/Page404";
import PageAllImages from "../pages/PageAllImages";

export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/all" element={<PageAllImages />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
