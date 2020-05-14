import React, { Component } from "react";
import WithClass from "../../../hoc/WithClass/WithClass";
import { Grid, Image, Form, Input } from "semantic-ui-react";
import classes from "./SignUp.module.css";
import image from "../../../assets/images/logo_with_text.png";
import Button from "../../UI/Button/Button";

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
                },
                valid: false,
                touched: false,
            },
        },
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
                        <h2 style={{textAlign: 'center'}}>
                            Create an Account
                        </h2>
                        <Form>
                            {formFields}
                            <Grid centered>
                                <Grid.Row>
                                    <Button size='large'>Sign Up</Button>
                                </Grid.Row>
                                <Grid.Row>
                                    <p>Already have an account ? Sign In</p>
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
