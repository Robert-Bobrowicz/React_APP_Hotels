import { useState } from "react"
import useAuth from "../../components/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../components/LoginButton/LoginButton";
import axios from "../../axios-auth";

export default function Login(props) {

    // const emailRef = useRef();
    const [auth, setAuth] = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [valid, setValid] = useState(null);
    const [error, setError] = useState('');
    const API_KEY = process.env.REACT_APP_API_KEY;

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(`/accounts:signInWithPassword?key=${API_KEY}`, {
                email: email,
                password: password,
                returnSecureToken: true
            });
            console.log(res);
            // setAuth(true, {
            //     email: res.data.email,
            //     token: res.data.idToken,
            //     userId: res.data.localId
            // });
            setAuth({
                email: res.data.email,
                token: res.data.idToken,
                userId: res.data.localId
            });
            navigate('/');
        } catch (ex) {
            console.log(ex.response);
            setError(ex.response.data.error.message);
            setLoading(false);
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

        if (auth) navigate('/');
    }

    return (
        <div>
            <h2>Login</h2>
            {/* {valid === false ?
                (
                    <div className="alert alert-danger">Invalid login data</div>
                ) : null

            } */}
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

                {error ? (<div className="alert alert-danger mt-2">{error}</div>) : null}

                {
                    loading
                        ? <LoadingButton />
                        : <button className="btn btn-primary mt-2">Login</button>
                }

            </form>
        </div>

    )
}