import { useState } from "react"

export default function Login(props) {

    // const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        e.preventDefault();
        // console.log(emailRef.current.value);
        console.log(email, password)
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
                <button className="btn btn-primary mt-2">Login</button>
            </form>
        </div>

    )
}