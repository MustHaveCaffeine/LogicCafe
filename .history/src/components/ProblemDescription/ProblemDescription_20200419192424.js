import React, { Component, Fragment } from "react";
import { Divider, Header, Dimmer, Loader, Segment } from "semantic-ui-react";
import classes from "./ProblemDescription.module.css";
import axios from "../../axios-problem";

class ProblemDescription extends Component {
    state = {
        problem: null,
        description: null,
        error: false,
    };

    componentDidMount() {
        const problemId = this.props.match.params.id;

        axios
            .get(`problem/${problemId}.json`)
            .then((respnse) => {
                this.setState({ problem: respnse.data });
                console.log(respnse.data);
            })
            .catch((error) => {
                this.setState({ error: error.message });
                console.log(error.message);
            });
        axios
            .get(`/problemDescription/${problemId}.json`)
            .then((respnse) => {
                this.setState({
                    description: respnse.data,
                });
                console.log(respnse.data);
            })
            .catch((error) => {
                this.setState({ error: error.message });
                console.log(error.message);
            });
    }

    render() {
        let problem = this.state.error ? (
            <p>Problem can't be loaded!</p>
        ) : (
            <Segment>
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            </Segment>
        );

        const question = {
            ...this.state.problem,
        };

        let problemDifficulty = null;

        if (this.state.problem && this.state.description) {
            if (question.difficulty === "Medium") {
                problemDifficulty = (
                    <Header as='h5' color='orange'>
                        {question.difficulty}
                    </Header>
                );
            } else if (question.difficulty === "Easy") {
                problemDifficulty = (
                    <Header as='h5' color='green'>
                        {question.difficulty}
                    </Header>
                );
            } else if (question.difficulty === "Hard") {
                problemDifficulty = (
                    <Header as='h5' color='red'>
                        {question.difficulty}
                    </Header>
                );
            }

            problem = (
                <Fragment>
                    <Header as='h3'>
                        {question.id + ". " + question.title}
                    </Header>
                    <div className={classes.Headers}>
                        <div>{problemDifficulty}</div>
                        <div>
                            <Header as='h6'> 3366</Header>
                        </div>
                        <div>
                            <Header as='h6'>379</Header>
                        </div>
                        <div>
                            <Header as='h6'>Add to List</Header>
                        </div>
                        <div>
                            <Header as='h6'>Share</Header>
                        </div>
                    </div>
                    <Divider />
                    {this.state.description.description}
                    <Divider />
                    <div className={classes.Headers}>
                        <p>Contibutor</p>
                        <p>{question.author}</p>
                    </div>
                    <Divider />
                    <div className={classes.Headers}>
                        <p>Related Topics</p>
                        <p>{question.tags}</p>
                    </div>
                </Fragment>
            );
        }

        return <Fragment>{problem}</Fragment>;
    }
}

export default ProblemDescription;
