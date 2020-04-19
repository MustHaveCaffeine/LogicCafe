import React from "react";
import { Form, Select } from "semantic-ui-react";
import WithClass from "../../../hoc/WithClass";
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    let inputClasses = [];

    if(props.touched && props.shouldValidate && props.invalid) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case "input":
            inputElement = <input {...props.elementConfig} onChange={props.changed}/>;
            break;
        case "textarea":
            inputElement = <Form.TextArea {...props.elementConfig} onChange={props.changed}/>;
            break;
        case "dropdown":
            inputElement = (
                <Select
                    fluid
                    options={props.elementConfig.options}
                    placeholder={props.elementConfig.placeholder}
                    onChange={props.changed}
                />
            );
            break;
        default:
            inputElement = <input {...props.elementConfig} onChange={props.changed}/>;
            break;
    }

    return <WithClass classes={inputClasses}>{inputElement}</WithClass>;
};

export default input;
