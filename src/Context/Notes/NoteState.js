import { useState } from "react";

import NoteContext from "./NoteContext";

let notesInit = [
    {
        _id: "6284611b2bfcb5a471ac328d",
        user: "62845f9cd84324d4faa061fa",
        title: "get milk",
        description: "get milk from the store",
        tag: "General",
        date: "2022-05-18T02:59:39.650Z",
        __v: 0,
    },
    {
        _id: "6285e7329394bb8f79b0e929",
        user: "62845f9cd84324d4faa061fa",
        title: "a new note",
        description: "a new description",
        tag: "a new tag",
        date: "2022-05-19T06:44:02.203Z",
        __v: 0,
    },
];

const NoteState = (props) => {
    const [notes, setNotes] = useState(notesInit);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
