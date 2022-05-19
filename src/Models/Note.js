class Note {
    constructor(title, description, tag, id = "", userId = "") {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.description = description;
        this.tag = tag;
    }
}

export default Note;
