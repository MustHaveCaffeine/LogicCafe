import React from "react";
import { Grid } from "semantic-ui-react";
import WithClass from "../../hoc/WithClass";
import classes from "./ProblemTile.module.css";
import { Link } from "react-router-dom";

const problemTile = (props) => {
    return (
        <WithClass classes={classes.Basic}>
            <Grid>
                <Grid.Column textAlign='right' width={1}>
                    {props.id}
                </Grid.Column>
                <Grid.Column textAlign='left' width={12}>
                    <Link to={`/problems/${props.id}`}>{props.title}</Link>
                </Grid.Column>
                <Grid.Column textAlign='center' width={2}>
                    {props.difficulty}
                </Grid.Column>
            </Grid>
        </WithClass>
    );
};

export default problemTile;
