import React, { Component } from "react";
import { Loader, Grid, Header, Pagination } from "semantic-ui-react";
import ProblemTile from "../ProblemTile/ProblemTile";
import classes from "./ProblemsListComponent.module.css";
import WithClass from "../../../hoc/WithClass/WithClass";
import TagBasedFilter from "../../TagBasedFilter/TagBasedFilter";

class ProblemsListComponent extends Component {
    state = {
        activePage: 1,
    };

    handlePageChange = (e,pageInfo) => {
        this.setState({activePage: pageInfo.activePage});
    }

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
                                    <Header as='h4' color='teal'>
                                        #
                                    </Header>
                                </Grid.Column>
                                <Grid.Column textAlign='left' width={12}>
                                    <Header as='h4' color='teal'>
                                        Title
                                    </Header>
                                </Grid.Column>
                                <Grid.Column textAlign='center' width={2}>
                                    <Header as='h4' color='teal'>
                                        Difficulty
                                    </Header>
                                </Grid.Column>
                            </Grid>
                        </WithClass>
                        {problems}
                    </Grid.Column>
                    <Grid.Column textAlign='center' width={2}>
                        <Header as='h4' color='grey'>
                            Tags
                        </Header>
                        <TagBasedFilter />
                    </Grid.Column>
                </Grid>
                <div className={classes.Pager}>
                <Pagination defaultActivePage={this.state.activePage}
                    totalPages={29}
                    onPageChange={this.handlePageChange} 
                    />
                </div>
            </WithClass>
        );
    }
}

export default ProblemsListComponent;
