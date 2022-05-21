import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import NoteContext from "../Context/Notes/NoteContext";

function UpdateNote(props) {
    let oldTitle = "";
    let oldDescription = "";
    let oldTag = props.note.tag;

    if (props.note != null) {
        oldTitle = props.note.title;
        oldDescription = props.note.description;
    }

    const [newTitle, setNewTitle] = useState(oldTitle);
    const [newDescription, setNewDescription] = useState(oldDescription);
    const [newTag, setNewTag] = useState(oldTag);

    const { updateNote } = useContext(NoteContext);

    const onTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const onDescriptionChange = (e) => {
        setNewDescription(e.target.value);
    };

    const onTagChange = (updatedTag) => {
        setNewTag(updatedTag);
    };

    const editNote = () => {
        updateNote(props.note._id, newTitle, newDescription, newTag);
        props.onHide();
    };

    return (
        <div>
            <Modal
                show={props.show}
                onShow={props.onShow}
                onHide={props.onHide}
            >
                <Modal.Header>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <label htmlFor="noteTitleUpdate">New Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="noteTitleUpdate"
                                name="noteTitleUpdate"
                                value={newTitle}
                                onChange={onTitleChange}
                            />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <label htmlFor="noteDescriptionUpdate">
                                New Description
                            </label>
                            <textarea
                                rows={4}
                                type="text"
                                className="form-control"
                                id="noteDescriptionUpdate"
                                name="noteDescriptionUpdate"
                                value={newDescription}
                                onChange={onDescriptionChange}
                            ></textarea>
                        </Form.Group>
                        <Form.Group>
                            Edit tag: &nbsp;
                            {props.tags.map((tag) => {
                                return (
                                    <Form.Check
                                        inline
                                        key={tag.color}
                                        type="radio"
                                        name="tag"
                                        defaultChecked={
                                            tag.name === oldTag ? true : false
                                        }
                                        label={tag.name}
                                        onChange={() => onTagChange(tag.name)}
                                    />
                                );
                            })}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={editNote}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

UpdateNote.propTypes = {
    show: PropTypes.bool,
    tags: PropTypes.array,
    onHide: PropTypes.func,
    onClose: PropTypes.func,
};

export default UpdateNote;
