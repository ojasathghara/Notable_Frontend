import { useState } from "react";

import NoteContext from "./NoteContext";
import Note from "../../Models/Note";

const NoteState = (props) => {
    const noteInit = new Note("Milk", "Get Milk from the store", "Groceries");
    const [state, setState] = useState(noteInit);

    const updateState = () => {
        setTimeout(() => {
            setState({
                title: "Hello",
                description: "How are you?",
            });
        }, 3000);
    };

    return (
        <NoteContext.Provider value={{ state, updateState }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
