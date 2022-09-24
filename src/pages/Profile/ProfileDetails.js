

export default function ProfileDetails(props) {
    return (
        <>
            <p>Profile details</p>
            <form>
                <div className="form-groupmt-2">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="enter your new email"/>
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="*************"/>
                </div>
                <button className="btn btn-primary mt-2">Change</button>
            </form>
        </>
    )
}