import React, { Component } from "react";
import { Loader, Grid, Pagination } from "semantic-ui-react";
import ProblemTile from "../ProblemTile/ProblemTile";
import classes from "./ProblemsListComponent.module.css";
import WithClass from "../../../hoc/WithClass/WithClass";
import TagBasedFilter from "../../TagBasedFilter/TagBasedFilter";

class ProblemsListComponent extends Component {
    state = {
        activePage: 1,
    };

    handlePageChange = (e, pageInfo) => {
        this.setState({ activePage: pageInfo.activePage });
    };

    render() {
        const loading = this.props.problems.length === 0;

        let problemid = 1;

        let problems = this.props.problems.map((prob) => (
            <ProblemTile
                key={problemid}
                id={problemid++}
                title={prob.title}
                difficulty='Easy'
            />
        ));

        return (
            <WithClass classes={classes.Margin}>
                <Grid columns={2}>
                    <Loader active={loading} />
                    <Grid.Column width={13}>
                        <WithClass classes={classes.Back}>
                            <Grid>
                                <Grid.Column textAlign='right' width={1}>
                                    <h4>#</h4>
                                </Grid.Column>
                                <Grid.Column textAlign='left' width={12}>
                                    <h4>Title</h4>
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
                <div className={classes.Pager}>
                    <Pagination
                        defaultActivePage={this.state.activePage}
                        totalPages={29}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </WithClass>
        );
    }
}

export default ProblemsListComponent;
