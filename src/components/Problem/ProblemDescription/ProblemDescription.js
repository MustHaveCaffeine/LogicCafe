import React, { Component, Fragment } from "react";
import {
    Divider,
    Dimmer,
    Loader,
    Segment,
} from "semantic-ui-react";
import { ProblemContext } from "../../../providers/ProblemProvider/ProblemProvider";
import classes from "./ProblemDescription.module.css";
import Label from "../../UI/Label/Label";
import { Link } from "react-router-dom";

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
                <h5
                    color={this.difficultyColorMap[problem.difficulty]}>
                    {problem.difficulty}
                </h5>
            );

            const tags = problem.tags.split(",").map((tag) => (
                <Label key={tag} type="inline">
                    <Link to='/'>{tag}</Link>
                </Label>
            ));

            return (
                <Fragment>
                    <h3>{problem.id + ". " + problem.title}</h3>
                    <div className={classes.Headers}>
                        <div>{problemDifficulty}</div>
                        <div>
                            <h6>3366</h6>
                        </div>
                        <div>
                            <h6>379</h6>
                        </div>
                        <div>
                            <h6>Add to List</h6>
                        </div>
                        <div>
                            <h6>Share</h6>
                        </div>
                    </div>
                    <Divider />
                    {problem.description}
                    <Divider />
                    <div className={classes.Label}>
                        <p>Contributor</p>
                        <p style={{fontWeight: 600}}>{problem.author}</p>
                    </div>
                    <Divider />
                    <div>
                        <p>Related Topics</p>
                        {tags}
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
