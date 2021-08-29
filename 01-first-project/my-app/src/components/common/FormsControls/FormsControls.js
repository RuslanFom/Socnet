import React from "react";
import styles from "./FormsControls.module.css";


const FormControl = ({input, meta, Formtype, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <Formtype {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}


export const Textarea = (props) => {
    return <FormControl {...props} Formtype="textarea"> </FormControl>
    /*const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>*/
}


export const Input = (props) => {
    return <FormControl {...props} Formtype="input"> </FormControl>
   /* const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>*/
}