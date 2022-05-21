import React from "react";
import Notes from "./Notes";
import NoteState from "../Context/Notes/NoteState";

function Home(props) {
    return (
        <div>
            <NoteState>
                <Notes />
            </NoteState>
        </div>
    );
}

export default Home;
