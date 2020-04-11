import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import ProblemsPage from './components/ProblemsPage/ProblemsPage';
import { Switch, Route } from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/problems" component={ProblemsPage} />
            <Route path="/problems/:id" component={ProblemsPage} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
