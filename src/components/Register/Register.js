import { useState } from "react";
import Input from "../Input/Input";
import LoadingButton from "../LoginButton/LoginButton";
import formValidate from "../../helpers/formValidate";

export default function Register(props) {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: {
            value: '',
            error: '',
            showError: false,
            rules: ['required', 'email']
        },
        password: {
            value: '',
            error: '',
            showError: false,
            rules: ['required']
        }
    });

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        //save data to backend
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    const changeHandler = (value, fieldName) => {
        const error = formValidate(form[fieldName].rules, value);

        setForm({
            ...form,
            [fieldName]: {
                ...form[fieldName],
                value,
                showError: true,
                error: error
            }
        })
    };

    return (
        <div className="card mb-4">
            <div className="card-header">Register</div>
            <div className="card-body">
                <form onSubmit={submit}>

                    <Input
                        label="Email"
                        value={form.email.value}
                        onChange={val => changeHandler(val, 'email')}
                        error={form.email.error}
                        showError={form.email.showError}
                    />

                    <Input
                        label="Password"
                        type="text"
                        value={form.password.value}
                        onChange={val => changeHandler(val, 'password')}
                        error={form.password.error}
                        showError={form.password.showError}
                    />

                    <LoadingButton className="btn btn-primary mt-4" loading={loading}>Save</LoadingButton>
                </form>
            </div>
        </div>
    )
}