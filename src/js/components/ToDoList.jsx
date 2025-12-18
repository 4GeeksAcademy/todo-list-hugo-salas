import React, { useState } from "react";

export default function ToDoList() {
    const [doList, setDoList] = useState("");
    const [stickyNote, setstickyNote] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (doList.trim() === "") return null;

        setstickyNote([...stickyNote, doList]);
        setDoList("");
    };

    const handleDelete = (i) => {
        setstickyNote(stickyNote.filter((element, index) => index !== i));
    };

    const handleChange = (e) => {
        setDoList(e.target.value);
    }

    console.log(stickyNote)

    return (
        <div className="postit">
            <form onSubmit={handleSubmit}>
                <input type="text" value={doList} onChange={handleChange} placeholder="To-Do"/>
            </form>

            <ul>
                {stickyNote.map((task, i) => (
                    <div key={i}>
                        <li>
                            {task}<button className="btn btn-danger hover-none" onClick={() => handleDelete(i)}> X </button>
                        </li>
                        <hr className="line" />
                    </div>
                ))}
            </ul>

            {stickyNote.length === 0 && (<p className="empty-message">Sin tareas pendientes</p>)}
        </div>
    );
};

///export default ToDoList;