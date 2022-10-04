export default function Login(props) {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div className="form-groupmt-2">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="enter your email" />
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="*************" />
                </div>
                <button className="btn btn-primary mt-2">Login</button>
            </form>
        </div>

    )
}