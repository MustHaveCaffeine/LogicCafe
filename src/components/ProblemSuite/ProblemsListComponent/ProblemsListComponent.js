import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ProblemTile from "../ProblemTile/ProblemTile";
import classes from "./ProblemsListComponent.module.css";
import WithClass from "../../../hoc/WithClass/WithClass";
import TagBasedFilter from "../../TagBasedFilter/TagBasedFilter";

class ProblemsListComponent extends Component {
    render() {
        let problems = this.props.problems.map((prob) => (
            <ProblemTile
                key={prob.slug}
                title={prob.title}
                difficulty={prob.level}
                slug={prob.slug}
            />
        ));

        return (
            <WithClass classes={classes.Margin}>
                <Grid columns={2}>
                    <Grid.Column width={13}>
                        <WithClass classes={classes.Back}>
                            <Grid>
                                <Grid.Column textAlign='left' width={14}>
                                    <h4 style={{ marginLeft: "5px" }}>Title</h4>
                                </Grid.Column>
                                <Grid.Column textAlign='center' width={2}>
                                    <h4>Difficulty</h4>
                                </Grid.Column>
                            </Grid>
                        </WithClass>
                        <div>{problems}</div>
                    </Grid.Column>
                    <Grid.Column textAlign='center' width={2}>
                        <h4>Tags</h4>
                        <TagBasedFilter />
                    </Grid.Column>
                </Grid>
            </WithClass>
        );
    }
}

export default ProblemsListComponent;
