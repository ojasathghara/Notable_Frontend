import { useState } from "react";
import NoteContext from "./NoteContext";

const host = "http://localhost:17778/api/note";

const NoteState = (props) => {
    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        let response = await fetch(`${host}/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                auth_token: localStorage.getItem("notable_auth_token"),
            },
        });

        response = await response.json();
        setNotes(response.data.notes);
    };

    const addNote = async (note) => {
        let response = await fetch(`${host}/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                auth_token: localStorage.getItem("notable_auth_token"),
            },
            body: JSON.stringify(note), // body data type must match "Content-Type" header
        }); // convert the response string into json

        response = await response.json();
        const newNote = response.data.note;

        setNotes(notes.concat(newNote));
    };
    const updateNote = async (noteId, newTitle, newDescription, newTag) => {
        const note = {
            title: newTitle,
            description: newDescription,
            tag: newTag,
        };

        let response = await fetch(`${host}/updatenote/${noteId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                auth_token: localStorage.getItem("notable_auth_token"),
            },
            body: JSON.stringify(note), // body data type must match "Content-Type" header
        }); // convert the response string into json

        response = await response.json();
        const updatedNote = response.data.note;
        const noteIdx = notes.findIndex((n) => n._id === updatedNote._id);

        let newNotes = [...notes];

        newNotes[noteIdx].title = newTitle;
        newNotes[noteIdx].description = newDescription;
        newNotes[noteIdx].tag = newTag;

        setNotes(newNotes);
    };
    const deleteNote = async (noteId) => {
        let response = await fetch(`${host}/delete/${noteId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                auth_token: localStorage.getItem("notable_auth_token"),
            },
        });

        response = await response.json();
        const deletedNoteId = response.data.id;

        const newNotes = notes.filter((note) => note._id !== deletedNoteId);
        setNotes(newNotes);
    };

    return (
        <NoteContext.Provider
            value={{ notes, getNotes, addNote, deleteNote, updateNote }}
        >
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
