import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './ProblemsPage.module.css';

class ProblemsPage extends Component {

    state = { isFetching : true, problems: []}

    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5e91d31fcc62be4369c2d0f2', {
            headers: {
                'secret-key': '$2a$10$EyNAXYyl3fqSU9jMcZrIUOTr8bizEq/i8ztxTAJec3owv71oomVTy'
            }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({ isFetching: false, problems: data})
        })
        .catch(console.error)
    }

    problemRowHtml = (p) => 
        <li>
            <Link to={p.path}> {p.title} </Link>
        </li>

    render () {
        return (
            <ul>
            {
                this.state.problems.map(this.problemRowHtml)
            }
            </ul>
        );
    }
}

export default ProblemsPage;