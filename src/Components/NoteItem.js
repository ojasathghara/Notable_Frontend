import React, { useContext } from "react";
import PropTypes from "prop-types";
import NoteContext from "../Context/Notes/NoteContext";

function NoteItem(props) {
    const noteContext = useContext(NoteContext);
    const { deleteNote } = noteContext;

    return (
        <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{props.note.title}</h5>
                <hr />
                <p className="card-text">{props.note.description}</p>
                <hr />
                <div className="d-flex justify-content-between">
                    <i
                        className="fa-regular fa-pen-to-square"
                        onClick={() => props.onEdit(props.note)}
                    >
                        {" "}
                        Edit
                    </i>
                    <i
                        className="fa-regular fa-trash-can"
                        onClick={() => deleteNote(props.note._id)}
                    >
                        {" "}
                        Delete
                    </i>
                </div>
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    note: PropTypes.object,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

export default NoteItem;
