import React from "react";
import Notes from "./Note/Notes";
import NoteState from "../Context/Notes/NoteState";
import { useNavigate } from "react-router-dom";

import AuthContext from "../Context/Auth/AuthContext";
import { useContext, useEffect } from "react";

function Home(props) {
    const authContext = useContext(AuthContext);
    const { setAuthToken } = authContext;

    const navigate = useNavigate();

    useEffect(() => {
        const localAuthToken = localStorage.getItem("notable_auth_token");
        if (localAuthToken) {
            setAuthToken(localAuthToken);
            // eslint-disable-next-line
        } else {
            navigate("/login");
        }
    });
    return (
        <div>
            <NoteState>
                <Notes showAlert={props.showAlert} />
            </NoteState>
            {/* <TagState>
                    <Tags />
                </TagState> */}
        </div>
    );
}

export default Home;
