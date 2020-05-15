import React from "react";
import { Form, Dropdown } from "semantic-ui-react";
import WithClass from "../../../hoc/WithClass/WithClass";
import classes from "./Input.module.css";

const input = (props) => {
    let inputElement = null;
    let inputClasses = [];

    if (props.touched && props.shouldValidate && props.invalid) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case "input":
            inputElement = (
                <input {...props.elementConfig} onChange={props.changed} />
            );
            break;
        case "textarea":
            inputElement = (
                <Form.TextArea
                    {...props.elementConfig}
                    onChange={props.changed}
                />
            );
            break;
        case "dropdown":
            inputElement = (
                <Dropdown
                    fluid
                    options={props.elementConfig.options}
                    placeholder={props.elementConfig.placeholder}
                    onChange={props.changedDropdown}
                    selection
                    value={props.value}
                />
            );
            break;
        case "multiple_dropdown":
            inputElement = (
                <Dropdown
                    fluid
                    options={props.elementConfig.options}
                    placeholder={props.elementConfig.placeholder}
                    onChange={props.changedTags}
                    selection
                    multiple
                    value={props.value}
                />
            );
            break;
        default:
            inputElement = (
                <input {...props.elementConfig} onChange={props.changed} />
            );
            break;
    }

    return <WithClass classes={inputClasses}>{inputElement}</WithClass>;
};

export default input;
