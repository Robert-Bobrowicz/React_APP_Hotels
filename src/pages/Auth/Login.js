import { useState } from "react"
import useAuth from "../../components/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../components/LoginButton/LoginButton";
import axios from "axios";

export default function Login(props) {

    // const emailRef = useRef();
    const [auth, setAuth] = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(null);
    const API_KEY = process.env.REACT_APP_API_KEY;

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
                eamil: email,
                password: password,
                returnSecureToken: true
            });
            console.log(res);
        } catch (ex) {
            console.log(ex.response);
        };
        // console.log(emailRef.current.value);

        // setTimeout(() => {
        //     //login process
        //     if (true) {
        //         setAuth(true);
        //         navigate('/');
        //     } else {
        //         setValid(false);
        //         setPassword('');
        //     }
        //     // setLoading(false);
        // }, 1500);

        console.log(auth, email, password);
    }

    return (
        <div>
            <h2>Login</h2>
            {valid === false ?
                (
                    <div className="alert alert-danger">Invalid login data</div>
                ) : null

            }
            <form onSubmit={submit}>
                <div className="form-groupmt-2">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="enter your email" />
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control" placeholder="*************" />
                </div>
                {
                    loading
                        ? <LoadingButton />
                        : <button className="btn btn-primary mt-2">Login</button>
                }

            </form>
        </div>

    )
}