import React, { Component } from "react";
import { Header, Form, Checkbox, Button } from "semantic-ui-react";
import WithClass from "../../hoc/WithClass";
import classes from "./ProblemPublish.module.css";
import Input from "../UI/Input/Input";

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
                elementType: "text",
                elementConfig: {
                    type: "text",
                    placeholder: "Tags",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
        },
        isProblemValid: false,
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
                updatedProblemForm[inputIdentifier].value && problemIsValid;
        }
        this.setState({
            problemForm: updatedProblemForm,
            isProblemValid: problemIsValid,
        });
        console.log(this.state);
        console.log(updatedProblemForm);
        console.log(this.state.isProblemValid);
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
                                touched={formElement.config.touched}
                                invalid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                            />
                        </Form.Field>
                    ))}
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit' disabled={!this.state.isProblemValid}>
                        Submit
                    </Button>
                    <Button color='grey'>Test Case Upload</Button>
                </Form>
            </WithClass>
        );
    }
}

export default ProblemPublish;
