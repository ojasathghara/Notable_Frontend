import React, { useState } from "react";
import NoteItem from "./NoteItem";
import UpdateNote from "./UpdateNote";

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

export default function Notes({ tags }) {
    const [notes, setNotes] = useState(notesInit);
    const [currentNote, setCurrentNote] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);
    const handleModalSubmit = (id, newTitle, newDescription, newTag) => {
        setModalShow(false);
    };

    const editNote = (note) => {
        setCurrentNote(note);
        setModalShow(true);
    };
    const deleteNote = (noteId) => {};

    return (
        <div className="my-5">
            <UpdateNote
                key={currentNote._id}
                id={currentNote._id}
                show={modalShow}
                note={currentNote}
                tags={tags}
                onShow={handleModalShow}
                onHide={handleModalClose}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
            />
            <h3>My Notes</h3>
            <hr />
            <div className="row">
                {notes.length !== 0 ? (
                    notes.map((note) => {
                        return (
                            // have to give unique key to each item
                            <div className="col-md-4" key={note._id}>
                                <NoteItem
                                    note={note}
                                    onEdit={editNote}
                                    onDelete={deleteNote}
                                />
                            </div>
                        );
                    })
                ) : (
                    <p>No tasks available to show.</p>
                )}
            </div>
        </div>
    );
}
