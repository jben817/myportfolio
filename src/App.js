import React from 'react';
import Navbartab from "./components/Navbartab";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './components/Projectcard';


function App() {
  return (
    <div className="App">
    <Navbartab />
    <ProjectCard/>
    </div>
  );
}

export default App;
