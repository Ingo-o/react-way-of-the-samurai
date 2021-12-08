import React from "react";
import css from "./FormControls.module.css"

// rest-оператор
const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={css.formControl + " " + (hasError ? css.error : " ")}>
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

// && - the operator returns the value of the first falsy operand encountered when evaluating from left to right,
// or the value of the last operand if they are all truthy.