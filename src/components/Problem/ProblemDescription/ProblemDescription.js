import React, { Component, Fragment } from "react";
import {
    Divider,
    Header,
    Dimmer,
    Loader,
    Segment,
    Label,
} from "semantic-ui-react";
import { ProblemContext } from "../../providers/ProblemProvider";
import classes from "./ProblemDescription.module.css";

class ProblemDescription extends Component {
    static contextType = ProblemContext;

    difficultyColorMap = {
        Medium: "orange",
        Easy: "green",
        Hard: "red",
    };

    render() {
        const problem = this.context && this.context.problem;

        if (problem && problem.description && problem.tags) {
            console.log(problem);
            const problemDifficulty = (
                <Header
                    as='h5'
                    color={this.difficultyColorMap[problem.difficulty]}>
                    {problem.difficulty}
                </Header>
            );

            const tags = problem.tags.split(",").map((tag) => (
                <Label as='a' color='teal' key={tag}>
                    {tag}
                </Label>
            ));

            return (
                <Fragment>
                    <Header as='h3'>{problem.id + ". " + problem.title}</Header>
                    <div className={classes.Headers}>
                        <div>{problemDifficulty}</div>
                        <div>
                            <Header as='h6'>3366</Header>
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
                    {problem.description}
                    <Divider />
                    <div className={classes.Headers}>
                        <p>Contributor</p>
                        <p>{problem.author}</p>
                    </div>
                    <Divider />
                    <div className={classes.Headers}>
                        <p>Related Topics</p>
                        <Label.Group circular>{tags}</Label.Group>
                    </div>
                </Fragment>
            );
        }

        return (
            <Segment>
                <Dimmer inverted active>
                    <Loader inverted />
                </Dimmer>
            </Segment>
        );
    }
}

export default ProblemDescription;
