import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/layout/NavBar";
function App() {
  return (
    <div className="App" style={{
      backgroundColor: "#ef5350 !important"
    }}>
        <NavBar/>
    </div>
  );
}

export default App;
 