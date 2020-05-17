import React, { Component } from "react";
import WithClass from "../../../hoc/WithClass/WithClass";
import { Grid, Image, Form } from "semantic-ui-react";
import classes from "./SignIn.module.css";
import image from "../../../assets/images/woman.jpg";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { Link } from "react-router-dom";

class SignIn extends Component {
    state = {
        controls: {
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
                    isEmail: false,
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
        },
        isAuthValid: false,
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.isEmail) {
            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            isValid = pattern.test(value) && isValid;
        }
        return isValid;
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
            updatedControl.validation
        );
        updatedControl.touched = true;
        updatedControlsForm[identifier] = updatedControl;
        let authIsValid = true;
        for (let inputIdentifier in updatedControlsForm) {
            authIsValid =
                updatedControlsForm[inputIdentifier].valid && authIsValid;
        }
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
            <WithClass classes={classes.SignIn}>
                <Grid>
                    <Grid.Column computer='8' only='computer'>
                        <Grid.Row verticalAlign='middle'>
                            <Image src={image} size='medium' centered />
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column mobile='16' computer='8'>
                        <h2 style={{ textAlign: "center" }}>
                            Sign In
                        </h2>
                        <Form>
                            {formFields}
                            <Grid centered>
                                <Grid.Row>
                                    <Button
                                        size='large'
                                        disabled={!this.state.isAuthValid}>
                                        Sign In
                                    </Button>
                                </Grid.Row>
                                <Grid.Row>
                                    <p>
                                        Don't have an account ?{" "}
                                        <Link to='/signup'>Sign Up</Link>
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

export default SignIn;
