
import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {

    return (
        <div className="card">
            <div className="card-header">
                <h2>User profile</h2>
            </div>
            <div className="card-body">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile/myhotels">Hotels</NavLink>
                    </li>
                </ul>
                <div className="mt-4">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}