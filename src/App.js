import './App.css';
import React from 'react';
import styled from 'styled-components';
import Blog from './views/blog.js';
import Home from './views/home.js';
import Navbar from './components/navbar.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {

  return (
    <Router>
          <div className="App">
            <header>
            <Navbar />
            </header>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
    </Router>
  );
}

const Nekej = styled.div`
          overflow: hidden;
          margin: 0;
          padding: 0;
          background-color: #411;
          border-top-style: solid;
          border-top-width: 1px;
          border-top-color: #411;
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-bottom-color: #111;
          text-align: center;
          font-size: 60px;
          font-family: Georgia, sans-serif;
          height: 70px;
`

function Calculate() {
return(
  <Nekej > {(6.48+6.48+5.18+5.18*0.4+5.19+8.75+5)-13.2+0.54+1+3.4+0.58+0.72+1.44} </Nekej>
)
};
