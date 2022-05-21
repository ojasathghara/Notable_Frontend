import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import UpdateNote from "./UpdateNote";

export default function Notes() {
    const tags = [
        { name: "General", color: "#F4511E" },
        { name: "Commute", color: "#00ACC1" },
        { name: "Education", color: "#4CAF50" },
        { name: "Bills", color: "#9E9E9E" },
        { name: "Food", color: "#E91E63" },
        { name: "Health", color: "#43A047" },
    ];

    const [currentNote, setCurrentNote] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const noteContext = useContext(NoteContext);
    const { notes, getNotes } = noteContext;

    useEffect(() => {
        getNotes();
    }, []);

    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    const editNote = (note) => {
        setCurrentNote(note);
        setModalShow(true);
    };

    return (
        <div className="my-5">
            <AddNote tags={tags} />
            <br />
            <UpdateNote
                key={currentNote._id}
                id={currentNote._id}
                show={modalShow}
                note={currentNote}
                tags={tags}
                onShow={handleModalShow}
                onHide={handleModalClose}
                onClose={handleModalClose}
            />
            <h3>My Notes</h3>
            <hr />
            <div className="row">
                {notes.length !== 0 ? (
                    notes.map((note) => {
                        return (
                            // have to give unique key to each item
                            <div className="col-md-4" key={note._id}>
                                <NoteItem note={note} onEdit={editNote} />
                            </div>
                        );
                    })
                ) : (
                    <p>No notes available to show.</p>
                )}
            </div>
        </div>
    );
}
