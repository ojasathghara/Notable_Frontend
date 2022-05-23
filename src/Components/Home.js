import React from "react";
import Notes from "./Note/Notes";
import NoteState from "../Context/Notes/NoteState";
import Tags from "./Tag/Tags";

function Home(props) {
    return (
        <div>
            <NoteState>
                <Notes />
            </NoteState>
            <Tags />
        </div>
    );
}

export default Home;
