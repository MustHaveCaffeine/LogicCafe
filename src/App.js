import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import ProblemsPage from "./containers/ProblemsPage/ProblemsPage";
import { Switch, Route } from "react-router-dom";
import ProblemViewPage from "./containers/ProblemViewPage/ProblemViewPage";
import ProblemPublish from "./components/Publish/ProblemPublish/ProblemPublish";
import SignUp from './components/Authentication/SignUp/SignUp';

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/signup' exact component={SignUp} />
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
