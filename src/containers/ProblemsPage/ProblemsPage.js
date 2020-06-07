import React, { Component } from "react";
import ProblemsListComponent from "../../components/ProblemSuite/ProblemsListComponent/ProblemsListComponent";
import { QueryRenderer } from "react-relay";
import environment from "../../Environment";
import graphql from "babel-plugin-relay/macro";

const ProblemsPageQuery = graphql`
    query ProblemsPageQuery {
        problems{
            title,
            level,
            slug
        }
    }
`;

class ProblemsPage extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={ProblemsPageQuery}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <ProblemsListComponent
                                problems={props.problems}
                            />
                        );
                    }
                    return <div>Loading...</div>
                }}
            />
        );
    }
}

export default ProblemsPage;
