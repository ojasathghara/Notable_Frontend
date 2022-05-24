import { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState({});
    const [hasAlert, setHasAlert] = useState(false);

    const createAlert = (type, message) => {
        const newAlert = {
            type: type,
            message: message,
        };

        setAlert(newAlert);
        hasAlert(true);

        setTimeout(() => {
            hasAlert(false);
            setAlert({});
        }, 2000);
    };

    return (
        <AlertContext.Provider value={{ alert, createAlert }}>
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;
