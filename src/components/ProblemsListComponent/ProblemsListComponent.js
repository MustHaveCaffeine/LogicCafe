import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Loader, Grid } from "semantic-ui-react";

class ProblemsListComponent extends Component {
    render;

    render() {
        const loading = this.props.problems.length === 0;
        const problemRow = (p) => (
            <li>
                <Link to={p.path}> {p.title} </Link>
            </li>
        );
        const problemsList = <ul>{this.props.problems.map(problemRow)}</ul>;
        return (
            <Grid columns={3}>
                <Loader active={loading} />
                {problemsList}
            </Grid>
        );
    }
}

export default ProblemsListComponent;
