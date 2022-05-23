import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import TagContext from "../../Context/Tags/TagContext";

function AddTag(props) {
    const tagContext = useContext(TagContext);
    const { addTag } = tagContext;

    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const onColorChange = (color) => {
        setColor(color);
    };

    const createTag = () => {
        const tag = {
            name: name,
            color: color,
        };
        props.onAdd(tag);
        setName("");
        setColor("");
    };

    return (
        <div>
            <h3>Add a new Tag</h3>
            <hr />
            <Form>
                <Form.Group>
                    <label htmlFor="title">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={onNameChange}
                    />
                </Form.Group>
            </Form>
        </div>
    );
}

export default AddTag;
