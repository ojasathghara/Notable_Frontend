import React from "react";
import NoteItem from "./NoteItem";

let notes = [{ _id: 1 }, { _id: 2 }];

export default function Notes() {
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
                                <NoteItem />
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
