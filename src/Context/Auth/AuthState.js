import { useState } from "react";
import AuthContext from "./AuthContext";

const host = "http://localhost:17778/api/auth";

const AuthState = (props) => {
    const [authToken, setAuthToken] = useState("");

    const login = async (email, password) => {
        const user = { email: email, password: password };
        let response = await fetch(`${host}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        response = await response.json();

        if (response.data && response.data.auth_token) {
            setAuthToken(response.data.auth_token);
            localStorage.setItem(
                "notable_auth_token",
                response.data.auth_token
            );
        }

        return response;
    };

    const signup = async (name, email, password) => {
        const user = { name: name, email: email, password: password };
        let response = await fetch(`${host}/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        response = await response.json();
        return response;
    };

    const logout = () => {
        setAuthToken("");
        localStorage.setItem("notable_auth_token", "");
    };

    return (
        <AuthContext.Provider
            value={{ authToken, setAuthToken, login, signup, logout }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
