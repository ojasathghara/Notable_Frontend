import React, { useContext, useEffect } from "react";
import AuthContext from "../../Context/Auth/AuthContext";

export default function Logout() {
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        logout();
        // eslint-disable-next-line
    }, []);

    return <div>User logged out!</div>;
}
