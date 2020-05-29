import React from "react";
import { Grid } from "semantic-ui-react";
import WithClass from "../../../hoc/WithClass/WithClass";
import classes from "./ProblemTile.module.css";
import { Link } from "react-router-dom";

const problemTile = (props) => {
    return (
        <WithClass classes={classes.Basic}>
            <Grid>
                <Grid.Column textAlign='right' width={1}>
                    <p style={{ color: "#FFCF44", fontWeight: 600 }}>
                        {props.id}
                    </p>
                </Grid.Column>
                <Grid.Column textAlign='left' width={12}>
                    <Link
                        style={{ color: "#F08700", fontWeight: 600 }}
                        to={`/problems/${props.slug}`}>
                        {props.title}
                    </Link>
                </Grid.Column>
                <Grid.Column textAlign='center' width={2}>
                    <p style={{ color: "#FFCF44", fontWeight: 600 }}>
                        {props.difficulty}
                    </p>
                </Grid.Column>
            </Grid>
        </WithClass>
    );
};

export default problemTile;
