import './App.css';
import { Layout } from './layout';
import {Home, About, Contact} from './pages';
import { Nav, Footer } from './layout';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className='flex flex-col min-h-screen text-white'>
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
