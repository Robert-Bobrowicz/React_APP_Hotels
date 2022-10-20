import { useState } from "react";
import Input from "../Input/Input";
import LoadingButton from "../LoginButton/LoginButton";
import formValidate from "../../helpers/formValidate";
// import axios from "../../axios"; //wczytuje instację axiosa z pliku axios.js
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register(props) {
    const [auth, setAuth] = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const API_KEY = process.env.REACT_APP_API_KEY;
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

        try {
            const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
                email: form.email.value,
                password: form.password.value,
                returnSecureToken: true
            });
            console.log(res);
            setAuth(true, res.data);
            navigate('/');
        } catch (ex) {
            console.log(ex.response);
        }

        // const res = await axios.get("/users.json"); //tu wystarczy wpisać tylko nazwę tablicy z DB, gdyż ścieżka pobrana jest w instancji
        // console.log(res);

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

        // save data to backend
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

    console.log(auth);
    if (auth) {
        navigate('/');
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
                    />
                </form>
            </div>
        </div>
    )
}