import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components"

function Component1() {
  return (
     <div>
        <h2>Estoy en el home</h2>
     </div>
  )
}

function Component2() {
  return (
     <div>
        <h2>Estoy en el about</h2>
     </div>
  )
}

const MLink = styled(Link)`
font: bold 11px Arial;
text-decoration: none;
background-color: #EEEEEE;
color: #333333;
padding: 2px 6px 2px 6px;
border-top: 1px solid #CCCCCC;
border-right: 1px solid #333333;
border-bottom: 1px solid #333333;
border-left: 1px solid #CCCCCC;
`;

function Component3() {
  return (
     <div>
        <h2>Estoy en el login </h2>
        <Link to="/"><button>inicio</button></Link>
     </div>
  )
}


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component1 />} />
        <Route path="/about" element={<Component2 />} />
        <Route path="/login" element={<Component3 />} />
      </Routes>
      </BrowserRouter>
    )
  }
}
