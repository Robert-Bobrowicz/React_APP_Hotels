import { useState } from "react";
import Input from "../Input/Input";
import LoadingButton from "../LoginButton/LoginButton";
import formValidate from "../../helpers/formValidate";
import axios from "axios";

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

    const valid = !Object.values(form).map(el => el.error).filter(error => error).length;

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await axios.get("https://hotelsdb-6ba12-default-rtdb.europe-west1.firebasedatabase.app/users.json")
        console.log(res);

        // const res = await fetch("https://hotelsdb-6ba12-default-rtdb.europe-west1.firebasedatabase.app/users.json", {
        //     // method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     // body: JSON.stringify({
        //     //     email: "miszka@goog.com",
        //     //     password: "1234567"
        //     // })
        // });
        // const contentDB = await res.json();
        // console.log(contentDB);

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
                        type="password"
                        value={form.password.value}
                        onChange={val => changeHandler(val, 'password')}
                        error={form.password.error}
                        showError={form.password.showError}
                    />

                    <LoadingButton
                        className="btn btn-primary mt-4"
                        loading={loading}
                        disabled={!valid}
                    >

                    </LoadingButton>
                </form>
            </div>
        </div>
    )
}