import React, { useContext, useEffect } from "react";
import AuthContext from "../../Context/Auth/AuthContext";
import { Link } from "react-router-dom";

export default function Logout() {
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        logout();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h3>Logout</h3>
            <hr />
            You have been logged out. <Link to="/login">Login</Link>
        </div>
    );
}
