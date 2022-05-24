import { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState({});

    const createAlert = (type, message) => {
        const newAlert = {
            type: type,
            message: message,
        };

        setAlert(newAlert);
    };

    return (
        <AlertContext.Provider value={{ alert, createAlert }}>
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;
