import React, { Component } from "react";
import { Grid, Tab, Button } from "semantic-ui-react";
import { ProblemProvider } from "../../providers/ProblemProvider";
import classes from "./ProblemViewPage.module.css";
import ProblemDescription from "../ProblemDescription/ProblemDescription";
import ProblemSubmissions from "../ProblemSubmissions/ProblemSubmissions";
import CodeEditor from "../CodeEditor/CodeEditor";
import axios from "../../axios-problem";

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
                            <Button.Group>
                                <Button>Prev</Button>
                                <Button.Or />
                                <Button>Next</Button>
                            </Button.Group>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className={classes.Headers}>
                            <div>
                                <Button>Run Code</Button>
                                <Button color='grey'>Submit</Button>
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
