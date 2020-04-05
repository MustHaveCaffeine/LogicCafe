import React, { Component } from 'react';
import Footer from './components/Footer/Footer'
import classes from './App.module.css';

class App extends Component{
  render() {
    return (
      <div className={classes.App}>
        <div>
          <p className="ui label">Must Have Caffeine !!!!!!</p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
