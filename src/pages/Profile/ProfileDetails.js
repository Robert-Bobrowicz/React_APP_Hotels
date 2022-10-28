import { useEffect, useState } from "react";
import LoadingButton from "../../components/LoginButton/LoginButton";
import { validateEmail } from "../../helpers/validateEmail";
import axios from "../../axios-auth";
import useAuth from "../../components/hooks/useAuth";

export default function ProfileDetails(props) {

    const [auth, setAuth] = useAuth();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('my@email.com');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(emailRef.current.value);

        // setTimeout(() => {
        //     //validate data

        //     //save data to backend
        //     setLoading(false);
        // }, 1500);

        try {
            const data = {
                idToken: auth.token,
                email: email,
                password: '',
                returnSecureToken: true
            };
            const res = await axios.post(`accounts:update?key=${API_KEY}`, data);

            if (password) {
                data.password = password;
            };
            console.log(res);
            setAuth({
                email: res.data.email,
                idToken: res.data.idToken,
                userId: res.data.localId
            })
        } catch (ex) {
            console.log(ex.response);
        }
        setLoading(false);
    }


    useEffect(() => {
        if (validateEmail(email)) {
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
        }
    }, [email]);

    useEffect(() => {
        if (password.length >= 8 || !password) {
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Invalid password length: minimum 8 characters required" });
        }
    }, [password]);

    return (
        <>
            <p>Profile details</p>
            <form onSubmit={submit}>
                <div className="form-groupmt-2">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
                        placeholder="enter your email" />
                    <div className="invalid-feedback">{errors.email}</div>
                    <div className="valid-feedback">ok</div>
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="*************" />
                    <div className="invalid-feedback">{errors.password}</div>
                    <div className="valid-feedback">ok</div>
                </div>
                {
                    loading
                        ? <LoadingButton />
                        : <button className="btn btn-primary mt-2">Save</button>
                }
            </form>
        </>
    )
}