import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,
  Route } from "react-router-dom";
import MockJson from './Pages/MockJson';
import Allmocks from "./Pages/Allmocks";
import AdminForMocks from "./Pages/AdminForMocks";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/v0.1/:id" element={<MockJson />} />
      <Route path="/allmocks" element={<Allmocks />} />
      <Route path="/admin" element={<AdminForMocks />} />
      <Route
        path="/edit/:id"
        element={<MockJson isFromEdit={true} hey={"oioioi"} />}
      />
      {/* <Route path="/hey" element={<Books />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
