import React, { useState, useEffect, useContext } from "react";
import TagContext from "../../Context/Tags/TagContext";
import AddTag from "./AddTag";
import TagItem from "./TagItem";

export default function Tags() {
    const tagContext = useContext(TagContext);
    const { tags, getTags } = tagContext;

    useEffect(() => {
        getTags();
    });

    return (
        <div className="my-5">
            <AddTag></AddTag>
            <br />
            <h3>My tags</h3>
            <hr />
            <div className="row">
                {tags.length !== 0 ? (
                    tags.map((tag) => {
                        return (
                            // have to give unique key to each item
                            <div className="col-md-2" key={tag._id}>
                                <TagItem tag={tag} />
                            </div>
                        );
                    })
                ) : (
                    <p>No tags available to show.</p>
                )}
            </div>
        </div>
    );
}
