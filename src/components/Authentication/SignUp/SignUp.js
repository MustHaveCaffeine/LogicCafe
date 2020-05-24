import React, { Component } from "react";
import WithClass from "../../../hoc/WithClass/WithClass";
import { Grid, Image, Form } from "semantic-ui-react";
import classes from "./SignUp.module.css";
import image from "../../../assets/images/woman.jpg";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { Link } from "react-router-dom";

class SignUp extends Component {
    state = {
        controls: {
            name: {
                label: "Name",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Name",
                },
                value: "",
                validation: {
                    required: true,
                    isName: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                label: "Email",
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your email",
                },
                value: "",
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                label: "Password",
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Enter Password",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false,
            },
            confirm_password: {
                label: "Confirm Password",
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Re-enter Password",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 6,
                    passwordMatch: true,
                },
                valid: false,
                touched: false,
            },
        },
        isAuthValid: false,
    };

    checkValidity = (value, rules, controls) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rules.isName) {
            const pattern = /^[A-Za-z]+([ A-Za-z]+)*$/;
            isValid = pattern.test(value) && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }
        if (rules.passwordMatch) {
            isValid = this.passwordMatchCheck(value, controls) && isValid;
            console.log(isValid);
        }
        return isValid;
    };

    passwordMatchCheck = (value, controls) => {
        const password = controls["password"].value;
        const rePassword = value;
        return password === rePassword;
    };

    inputChangedHandler = (event, identifier) => {
        const updatedControlsForm = {
            ...this.state.controls,
        };
        const updatedControl = {
            ...updatedControlsForm[identifier],
        };
        updatedControl.value = event.target.value;
        updatedControl.valid = this.checkValidity(
            updatedControl.value,
            updatedControl.validation,
            updatedControlsForm
        );
        updatedControl.touched = true;
        updatedControlsForm[identifier] = updatedControl;
        let authIsValid = true;
        for (let inputIdentifier in updatedControlsForm) {
            authIsValid =
                updatedControlsForm[inputIdentifier].valid && authIsValid;
        }
        authIsValid =
            this.passwordMatchCheck(
                updatedControlsForm["confirm_password"].value,
                updatedControlsForm
            ) && authIsValid;
        this.setState({
            controls: updatedControlsForm,
            isAuthValid: authIsValid,
        });
    };

    render() {
        const formElementArray = [];
        for (let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key],
            });
        }

        const formFields = formElementArray.map((entry) => (
            <Form.Field key={entry.id}>
                <label>{entry.config.label}</label>
                <Input
                    elementType={entry.config.elementType}
                    elementConfig={entry.config.elementConfig}
                    value={entry.config.value}
                    changed={(event) =>
                        this.inputChangedHandler(event, entry.id)
                    }
                    touched={entry.config.touched}
                    invalid={!entry.config.valid}
                    shouldValidate={entry.config.validation}
                />
            </Form.Field>
        ));

        return (
            <WithClass classes={classes.SignUp}>
                <Grid>
                    <Grid.Column computer='8' only='computer'>
                        <Grid.Row verticalAlign='middle'>
                            <Image src={image} size='medium' centered />
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column mobile='16' computer='8'>
                        <h2 style={{ textAlign: "center" }}>
                            Create an Account
                        </h2>
                        <Form>
                            {formFields}
                            <Grid centered>
                                <Grid.Row>
                                    <Button
                                        size='large'
                                        disabled={!this.state.isAuthValid}>
                                        Sign Up
                                    </Button>
                                </Grid.Row>
                                <Grid.Row>
                                    <p>
                                        Already have an account ?{" "}
                                        <Link to='/signin'>Sign In</Link>
                                    </p>
                                </Grid.Row>
                            </Grid>
                        </Form>
                    </Grid.Column>
                </Grid>
            </WithClass>
        );
    }
}

export default SignUp;
