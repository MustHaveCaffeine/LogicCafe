import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';

class App extends Component{
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          {/* <p class="ui label">Must Have Caffeine !!!</p> */}
          <HomePage />
        </Layout>
      </div>
    );
  }
}

export default App;
