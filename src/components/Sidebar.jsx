import React from "react";

function Sidebar(props) {
	const {
		notes,
		addNote,
		deleteNote,
		setCurrentNoteId,
		currentNote,
	} = props;

	const noteElements =
		notes &&
		notes.map((note) => {
			let isSelected = currentNote.id === note.id;
			return (
				<li
					className={`note ${
						isSelected ? "selected-note" : ""
					}`}
					key={note.id}
					onClick={() =>
						setCurrentNoteId(note.id)
					}
				>
					{note.title}
					<span
						className="note-delete"
						onClick={() => deleteNote(note.id)}
					>
						❌
					</span>
				</li>
			);
		});

	return (
		<aside className="sidebar">
			<div className="sidebar-title">
				{" "}
				Add a note
				<span className="notes-count">
					{notes.length}
				</span>
			</div>
			<button onClick={addNote}>+</button>
			<ul className="notes">{noteElements}</ul>
		</aside>
	);
}

export default Sidebar;
