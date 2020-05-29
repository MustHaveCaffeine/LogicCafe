import React, { Component } from "react";
import { Grid, Tab } from "semantic-ui-react";
import { ProblemProvider } from "../../providers/ProblemProvider/ProblemProvider";
import classes from "./ProblemViewPage.module.css";
import ProblemDescription from "../../components/Problem/ProblemDescription/ProblemDescription";
import ProblemSubmissions from "../../components/Problem/ProblemSubmissions/ProblemSubmissions";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import Button from "../../components/UI/Button/Button";
import { QueryRenderer } from "react-relay";
import environment from "../../Environment";
import graphql from "babel-plugin-relay/macro";

const ProblemViewPageQuery = graphql`
    query ProblemViewPageQuery($slug: String) {
        problem(slug: $slug) {
            title
            level
            description
            tags
        }
    }
`;

class ProblemViewPage extends Component {
    panes = [
        {
            menuItem: "Description",
            render: () => (
                <Tab.Pane>
                    <ProblemDescription />
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

    state = {
        selectedLanguage: "java",
    };

    changeLanguage = (_, data) => {
        this.setState({ selectedLanguage: data.value });
    };

    changeCode = (value) => {
        this.code = value;
    };

    render() {
        const problemSlug = {
            slug: this.props.match.params.slug,
        };

        return (
            <QueryRenderer
                environment={environment}
                query={ProblemViewPageQuery}
                variables={problemSlug}
                render={({ error, props }) => {
                    console.log(props);
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <ProblemProvider value={props}>
                                <Grid columns={2} padded>
                                    <Grid.Column>
                                        <div>
                                            <Tab panes={this.panes} />
                                        </div>
                                        <div className={classes.Margin}>
                                            <Button>Prev</Button>
                                            <Button>Next</Button>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div className={classes.Margin}>
                                            <CodeEditor
                                                onChange={this.changeCode}
                                                language={
                                                    this.state.selectedLanguage
                                                }
                                            />
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </ProblemProvider>
                        );
                    }
                    return <div>Loading...</div>;
                }}
            />
        );
    }
}

export default ProblemViewPage;
