import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function AddNote(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onTitleChange = (event) => {
        let newTitle = event.target.value;
        setTitle(newTitle);
    };

    const onDescriptionChange = (event) => {
        let newDescription = event.target.value;
        setDescription(newDescription);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title or description must not be empty.");
            return;
        }

        // props.onAdd(title, description);
        setTitle("");
        setDescription("");
    };

    return (
        <div>
            <h3>Add a new Note</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Enter title"
                        value={title}
                        onChange={onTitleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    {/* style added to display new lines properly */}
                    <label htmlFor="description">Description</label>
                    <textarea
                        style={{ whiteSpace: "pre-line" }}
                        rows={4}
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        placeholder="Enter a description"
                        value={description}
                        onChange={onDescriptionChange}
                    ></textarea>
                </div>
                <br />
                <div className="form-group">
                    <Button variant="primary" type="submit">
                        + Add
                    </Button>
                </div>
            </form>
        </div>
    );
}
