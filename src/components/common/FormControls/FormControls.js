import React from "react";
import css from "./FormControls.module.css"
import {Field} from "redux-form";

// meta - внутренняя деструктуризация.
const FormControl = ({input, meta: {touched, error}, Formtype, ...props}) => { // rest-оператор
    const hasError = touched && error;

    return (
        <div className={css.formControl + " " + (hasError ? css.error : " ")}>
            <div><Formtype {...input} {...props} /></div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = (props) => {
    return <FormControl {...props} Formtype='input'/>
}

export const Textarea = (props) => {
    return <FormControl {...props} Formtype='textarea'/>
}

export const createField = (placeholder, name, validate, component, props = {}, text = "") => (
    <div><Field placeholder={placeholder} name={name} validate={validate} component={component} {...props}/>{text}</div>
)

// && - the operator returns the value of the first falsy operand encountered when evaluating from left to right,
// or the value of the last operand if they are all truthy.