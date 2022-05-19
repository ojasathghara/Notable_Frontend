import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

function Home(props) {
    return (
        <div>
            <AddNote />
            <Notes />
        </div>
    );
}

export default Home;
