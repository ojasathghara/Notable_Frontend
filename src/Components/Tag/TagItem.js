import React, { useContext } from "react";
import { CloseButton } from "react-bootstrap";
import PropTypes from "prop-types";
import TagContext from "../../Context/Tags/TagContext";

function TagItem({ tag }) {
    const { deleteTag } = useContext(TagContext);

    return (
        <div
            style={{ backgroundColor: tag.color, borderRadius: "5% / 20%" }}
            className="d-flex justify-content-between p-2"
        >
            <div style={{ fontSize: "1.25rem" }}>{tag.name}</div>
            <div className="mt-1">
                <CloseButton
                    variant="white"
                    onClick={() => deleteTag(tag._id)}
                />
            </div>
        </div>
    );
}

TagItem.propTypes = {
    tag: PropTypes.object,
};

export default TagItem;
