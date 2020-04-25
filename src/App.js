import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import ProblemsPage from "./components/ProblemsPage/ProblemsPage";
import { Switch, Route } from "react-router-dom";
import ProblemViewPage from "./components/ProblemViewPage/ProblemViewPage";
import ProblemPublish from "./components/ProblemPublish/ProblemPublish";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/home' component={HomePage} />
                    <Route path='/problems' exact component={ProblemsPage} />
                    <Route
                        path='/problems/create-problem'
                        exact
                        component={ProblemPublish}
                    />
                    <Route
                        path='/problems/:id'
                        exact
                        component={ProblemViewPage}
                    />
                </Switch>
            </Layout>
        );
    }
}

export default App;
