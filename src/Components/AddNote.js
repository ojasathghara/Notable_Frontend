import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function AddNote({ tags }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("General");

    const onTitleChange = (event) => {
        let newTitle = event.target.value;
        setTitle(newTitle);
    };

    const onDescriptionChange = (event) => {
        let newDescription = event.target.value;
        setDescription(newDescription);
    };

    const onTagChange = (newTag) => {
        setTag(newTag);
    };

    const addNote = (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title or description must not be empty.");
            return;
        }

        setTitle("");
        setDescription("");
    };

    return (
        <div>
            <h3>Add a new Note</h3>
            <hr />
            <Form>
                <Form.Group>
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
                </Form.Group>
                <br />
                <Form.Group>
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
                </Form.Group>
                <br />
                <Form.Group>
                    Add a tag: &nbsp;
                    {tags.map((tag) => {
                        return (
                            <Form.Check
                                inline
                                key={tag.color}
                                type="radio"
                                name="tag"
                                label={tag.name}
                                onChange={() => onTagChange(tag.name)}
                            />
                        );
                    })}
                </Form.Group>
                <br />
                <Form.Group>
                    <Button variant="primary" type="submit" onClick={addNote}>
                        + Add
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

AddNote.propTypes = {
    tags: PropTypes.array,
};
