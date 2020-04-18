import React, { Component } from "react";
import ProblemsListComponent from "../ProblemsListComponent/ProblemsListComponent";

const secretKey =
    "$2a$10$EyNAXYyl3fqSU9jMcZrIUOTr8bizEq/i8ztxTAJec3owv71oomVTy";

const endPoints = {
    problems: "https://api.jsonbin.io/b/5e91d31fcc62be4369c2d0f2",
};

class ProblemsPage extends Component {
    state = { isFetching: true, problems: [] };

    componentDidMount() {
        fetch(endPoints.problems, {
            headers: {
                "secret-key": secretKey,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("loaded");
                this.setState({ isFetching: false, problems: data });
            });
    }

    render() {
        return <ProblemsListComponent problems={this.state.problems} />;
    }
}

export default ProblemsPage;
