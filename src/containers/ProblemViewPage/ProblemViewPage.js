import React, { Component } from "react";
import { Grid, Tab } from "semantic-ui-react";
import { ProblemProvider } from "../../providers/ProblemProvider/ProblemProvider";
import classes from "./ProblemViewPage.module.css";
import ProblemDescription from "../../components/Problem/ProblemDescription/ProblemDescription";
import ProblemSubmissions from "../../components/Problem/ProblemSubmissions/ProblemSubmissions";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import axios from "../../axios-problem";
import Button from "../../components/UI/Button/Button";

class ProblemViewPage extends Component {
    panes = [
        {
            menuItem: "Description",
            render: () => (
                <Tab.Pane>
                    <ProblemDescription />
                </Tab.Pane>
            ),
        },
        { menuItem: "Solution", render: () => <Tab.Pane>None</Tab.Pane> },
        {
            menuItem: "Submissions",
            render: () => (
                <Tab.Pane>
                    <ProblemSubmissions />
                </Tab.Pane>
            ),
        },
    ];

    state = {
        problem: {},
        selectedLanguage: "java",
    };

    componentDidMount() {
        const problemId = this.props.match.params.id;
        const problem = {};
        axios
            .get(`problem/${problemId}.json`)
            .then((response) => {
                Object.assign(problem, response.data);
                this.setState({ problem });
                // console.log(this.state);
            })
            .catch((error) => {
                this.setState({ error: error.message });
                console.error(error);
            });
        axios
            .get(`/problemDescription/${problemId}.json`)
            .then((response) => {
                Object.assign(problem, response.data);
                this.setState({ problem });
                // console.log(this.state);
            })
            .catch((error) => {
                this.setState({ error: error.message });
                console.error(error);
            });
    }

    changeLanguage = (_, data) => {
        this.setState({ selectedLanguage: data.value });
    };

    changeCode = (value) => {
        this.setState({ code: value });
    };

    render() {
        return (
            <ProblemProvider value={this.state}>
                <Grid columns={2} padded>
                    <Grid.Column>
                        <div>
                            <Tab panes={this.panes} />
                        </div>
                        <div className={classes.Margin}>
                            <Button btnType='primary'>Prev</Button>
                            <Button btnType='primary'>Next</Button>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className={classes.Headers}>
                            <div>
                                <Button btnType='secondary'>Run Code</Button>
                                <Button btnType='primary'>Submit</Button>
                            </div>
                        </div>
                        <div className={classes.Margin}>
                            <CodeEditor
                                onChange={this.changeCode}
                                language={this.state.selectedLanguage}
                            />
                        </div>
                    </Grid.Column>
                </Grid>
            </ProblemProvider>
        );
    }
}

export default ProblemViewPage;
