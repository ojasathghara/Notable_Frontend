import { useState } from "react";
import TagContext from "./TagContext";

const TagState = (props) => {
    const host = "http://localhost:17778/api/tag";
    const [tags, setTags] = useState([]);

    const getTags = async () => {
        let response = await fetch(`${host}/fetchalltags`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                auth_token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OTgyMzk3NDg0ZjBhYTU2YWQzZWU2In0sImlhdCI6MTY1MzE3ODkzN30.ezOA0RuTpECOZACo2Xs-Ugkl-TZMpR3K2mm2C5U6v9g",
            },
        });

        response = await response.json();
        setTags(response.data.tags);
    };

    const addTag = async (tag) => {
        let response = await fetch(`${host}/createtag`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                auth_token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OTgyMzk3NDg0ZjBhYTU2YWQzZWU2In0sImlhdCI6MTY1MzE3ODkzN30.ezOA0RuTpECOZACo2Xs-Ugkl-TZMpR3K2mm2C5U6v9g",
            },
            body: JSON.stringify(tag),
        });

        response = await response.json();
        setTags(tags.concat(response.data.tag));
    };

    const deleteTag = async (tagId) => {
        let response = await fetch(`${host}/deletetag/${tagId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                auth_token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OTgyMzk3NDg0ZjBhYTU2YWQzZWU2In0sImlhdCI6MTY1MzE3ODkzN30.ezOA0RuTpECOZACo2Xs-Ugkl-TZMpR3K2mm2C5U6v9g",
            },
        });

        response = await response.json();
        const deletedTagId = response.data.id;
        const newTags = tags.filter((tag) => tag._id !== deletedTagId);
        setTags(newTags);
    };

    return (
        <TagContext.Provider value={{ tags, getTags, addTag, deleteTag }}>
            {props.children}
        </TagContext.Provider>
    );
};

export default TagState;
