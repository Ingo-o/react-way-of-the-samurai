import React from "react";
import css from "./FormControls.module.css"

const FormControl = ({input, meta, Formtype, ...props}) => { // rest-оператор
    const hasError = meta.touched && meta.error;

    return (
        <div className={css.formControl + " " + (hasError ? css.error : " ")}>
            <div><Formtype {...input} {...props} /></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = (props) => {
    return <FormControl {...props} Formtype='input' />
}

export const Textarea = (props) => {
    return <FormControl {...props} Formtype='textarea' />
}

// && - the operator returns the value of the first falsy operand encountered when evaluating from left to right,
// or the value of the last operand if they are all truthy.