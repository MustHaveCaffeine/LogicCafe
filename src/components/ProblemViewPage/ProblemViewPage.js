import React, { Component } from "react";
import { Grid, Tab, Button, Select } from "semantic-ui-react";
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
                    <ProblemDescription {...this.props} />
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

    languages = [
        { key: 1, text: "Java", value: 1 },
        { key: 2, text: "Python", value: 2 },
        { key: 3, text: "C++", value: 3 },
        { key: 4, text: "C", value: 4 },
        { key: 5, text: "Javascript", value: 5 },
        { key: 6, text: "Ruby", value: 6 },
    ];

    componentDidMount() {
        const problemId = this.props.match.params.id;

        axios
            .get(`problem/${problemId}.json`)
            .then((response) => {
                this.setState({ problem: response.data });
                console.log(response.data);
            })
            .catch((error) => {
                this.setState({ error: error.message });
                console.log(error.message);
            });
        axios
            .get(`/problemDescription/${problemId}.json`)
            .then((response) => {
                this.setState({
                    description: response.data,
                });
                console.log(response.data);
            })
            .catch((error) => {
                this.setState({ error: error.message });
                console.log(error.message);
            });
    }

    render() {
        return (
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
                        <Select
                            placeholder='Select Language'
                            options={this.languages}
                        />
                        <div>
                            <Button>Run Code</Button>
                            <Button color='grey'>Submit</Button>
                        </div>
                    </div>
                    <div className={classes.Margin}>
                        <CodeEditor />
                    </div>
                </Grid.Column>
            </Grid>
        );
    }
}

export default ProblemViewPage;
