import React, { useContext } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
    const { notes, setNotes } = useContext(NoteContext);
    return (
        <div className="my-5">
            <h3>My Notes</h3>
            <hr />
            <div className="row">
                {notes.length !== 0 ? (
                    notes.map((note) => {
                        return (
                            // have to give unique key to each item
                            <div className="col-md-4" key={note._id}>
                                <NoteItem note={note} />
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
