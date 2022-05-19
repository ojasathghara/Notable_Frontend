import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

const tags = [
    { name: "General", color: "#F4511E" },
    { name: "Commute", color: "#00ACC1" },
    { name: "Education", color: "#4CAF50" },
    { name: "Bills", color: "#9E9E9E" },
    { name: "Food", color: "#E91E63" },
    { name: "Health", color: "#43A047" },
];

function Home(props) {
    return (
        <div>
            <AddNote tags={tags} />
            <Notes tags={tags} />
        </div>
    );
}

export default Home;
