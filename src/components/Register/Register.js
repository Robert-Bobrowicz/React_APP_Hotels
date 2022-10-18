import { useState } from "react";
import Input from "../Input/Input";
import LoadingButton from "../LoginButton/LoginButton";

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

    const submit = () => {

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