import { useState } from "react"
import useAuth from "../../components/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login(props) {

    // const emailRef = useRef();
    const [auth, setAuth] = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(emailRef.current.value);

        setTimeout(() => {
            //login process
            setAuth(true);
            navigate('/');
        }, 1500);

        console.log(email, password);
    }

    return (
        <div>
            <h2>Login</h2>
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
                        ? (
                            <button className="btn btn-primary" type="button" disabled>
                                <span className="sr-only">
                                    Login data check ...
                                </span>
                            </button>
                        )
                        : <button className="btn btn-primary mt-2">Login</button>
                }

            </form>
        </div>

    )
}