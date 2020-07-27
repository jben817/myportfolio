import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import About from './components/About'; 
import Navbartab from './components/Navbartab';



function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    <Navbartab></Navbartab>
    <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />

   
    </div>
    
    </BrowserRouter>
  );
}

export default App;
