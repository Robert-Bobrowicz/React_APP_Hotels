import { useRef } from "react"

export default function Login(props) {

    const emailRef = useRef();

    const submit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
                <div className="form-groupmt-2">
                    <label>Email</label>
                    <input type="email" ref={emailRef} className="form-control" placeholder="enter your email" />
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="*************" />
                </div>
                <button className="btn btn-primary mt-2" onClick={submit}>Login</button>
            </form>
        </div>

    )
}