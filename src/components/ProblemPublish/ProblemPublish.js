import React, { Component } from "react";
import { Header, Form, Checkbox, Button } from "semantic-ui-react";
import WithClass from "../../hoc/WithClass";
import classes from "./ProblemPublish.module.css";
import Input from "../UI/Input/Input";

const tags_options = [
    { key: "array", text: "Array", value: "Array" },
    { key: "binarySearch", text: "Binary Search", value: "Binary Search" },
    { key: "hashTable", text: "Hash Table", value: "Hash Table" },
    { key: "linkedList", text: "Linked List", value: "Linked List" },
    { key: "math", text: "Math", value: "Math" },
    { key: "string", text: "String", value: "String" },
    { key: "twoPointers", text: "Two Pointers", value: "Two Pointers" },
    {
        key: "divideAndConquer",
        text: "Divide and Conquer",
        value: "Divide and Conquer",
    },
    {
        key: "dynamicProgramming",
        text: "Dynamic Programming",
        value: "Dynamic Programming",
    },
    { key: "backtracking", text: "Backtracking", value: "Backtracking" },
    { key: "heap", text: "Heap", value: "Heap" },
    { key: "stack", text: "Stack", value: "Stack" },
    { key: "greedy", text: "Greedy", value: "Greedy" },
    { key: "sort", text: "Sort", value: "Sort" },
    {
        key: "bitManipulation",
        text: "Bit Manipulation",
        value: "Bit Manipulation",
    },
    { key: "tree", text: "Tree", value: "ruby" },
    { key: "bfs", text: "BFS", value: "BFS" },
    { key: "dfs", text: "DFS", value: "DFS" },
    { key: "unionFind", text: "Union Find", value: "Union Find" },
    { key: "graph", text: "Graph", value: "Graph" },
    { key: "design", text: "Design", value: "Design" },
    {
        key: "topologicalSort",
        text: "Topological Sort",
        value: "Topological Sort",
    },
    { key: "trie", text: "Trie", value: "Trie" },
    { key: "queue", text: "Queue", value: "Queue" },
    { key: "recursion", text: "Recursion", value: "Recursion" },
];

class ProblemPublish extends Component {
    state = {
        problemForm: {
            title: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Title",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            description: {
                elementType: "textarea",
                elementConfig: {
                    type: "textarea",
                    placeholder: "Description",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            difficulty: {
                elementType: "dropdown",
                elementConfig: {
                    placeholder: "Select Difficulty",
                    options: [
                        { key: 1, text: "Easy", value: "Easy" },
                        { key: 2, text: "Medium", value: "Medium" },
                        { key: 3, text: "Hard", value: "Hard" },
                    ],
                },
                value: "",
                validation: {},
                valid: false,
                touched: false,
            },
            tags: {
                elementType: "multiple_dropdown",
                elementConfig: {
                    placeholder: "Select Tags",
                    options: tags_options,
                },
                value: [],
                validation: {},
                valid: false,
                touched: false,
            },
        },
        isProblemValid: false,
    };

    difficultyChangedhandler = (event, data) => {
        const updatedProblemForm = {
            ...this.state.problemForm,
        };
        const updatedProblemElement = {
            ...updatedProblemForm["difficulty"],
        };
        updatedProblemElement.value = data.value;
        updatedProblemElement.touched = true;
        updatedProblemElement.valid = this.checkValidity(
            updatedProblemElement.value,
            updatedProblemElement.validation
        );
        updatedProblemForm["difficulty"] = updatedProblemElement;
        let problemIsValid = true;
        for (let inputIdentifier in updatedProblemForm) {
            problemIsValid =
                updatedProblemForm[inputIdentifier].valid && problemIsValid;
        }
        this.setState({
            problemForm: updatedProblemForm,
            isProblemValid: problemIsValid,
        });
    };

    tagsChangedhandler = (event, data) => {
        const updatedProblemForm = {
            ...this.state.problemForm,
        };
        const updatedProblemElement = {
            ...updatedProblemForm["tags"],
        };
        updatedProblemElement.value = data.value;
        updatedProblemElement.touched = true;
        updatedProblemElement.valid = this.checkValidity(
            updatedProblemElement.value,
            updatedProblemElement.validation
        );
        updatedProblemForm["tags"] = updatedProblemElement;
        let problemIsValid = true;
        for (let inputIdentifier in updatedProblemForm) {
            problemIsValid =
                updatedProblemForm[inputIdentifier].valid && problemIsValid;
        }
        this.setState({
            problemForm: updatedProblemForm,
            isProblemValid: problemIsValid,
        });
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedProblemForm = {
            ...this.state.problemForm,
        };
        const updatedProblemElement = {
            ...updatedProblemForm[inputIdentifier],
        };
        updatedProblemElement.value = event.target.value;
        updatedProblemElement.valid = this.checkValidity(
            updatedProblemElement.value,
            updatedProblemElement.validation
        );
        updatedProblemElement.touched = true;
        updatedProblemForm[inputIdentifier] = updatedProblemElement;

        let problemIsValid = true;
        for (let inputIdentifier in updatedProblemForm) {
            problemIsValid =
                updatedProblemForm[inputIdentifier].valid && problemIsValid;
        }
        this.setState({
            problemForm: updatedProblemForm,
            isProblemValid: problemIsValid,
        });
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        return isValid;
    };

    render() {
        const formElementArray = [];
        for (let key in this.state.problemForm) {
            formElementArray.push({
                id: key,
                config: this.state.problemForm[key],
            });
        }

        return (
            <WithClass classes={classes.Margin}>
                <Header as='h2'>Create Problem</Header>
                <Form>
                    {formElementArray.map((formElement) => (
                        <Form.Field key={formElement.id}>
                            <label style={{ textTransform: "capitalize" }}>
                                {formElement.id}
                            </label>
                            <Input
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event) =>
                                    this.inputChangedHandler(
                                        event,
                                        formElement.id
                                    )
                                }
                                changedDropdown={this.difficultyChangedhandler}
                                changedTags={this.tagsChangedhandler}
                                touched={formElement.config.touched}
                                invalid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                            />
                        </Form.Field>
                    ))}
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button
                        type='submit'
                        disabled={!this.state.isProblemValid}
                        color='teal'>
                        Submit
                    </Button>
                    <Button color='grey'>Test Case Upload</Button>
                </Form>
            </WithClass>
        );
    }
}

export default ProblemPublish;
