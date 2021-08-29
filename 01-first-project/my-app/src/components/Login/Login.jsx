import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       validate={[required, maxLength15]}
                       name={"login"}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[required, maxLength15]}
                       name={"password"}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       name={"rememberMe"}
                       type={"checkbox"}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


export default Login;