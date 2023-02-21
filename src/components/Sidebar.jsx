import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

function Sidebar() {
	const [notes, setNotes] = useState([]);
	const [currentNoteIndex, setCurrentNoteIndex] =
		useState(0);

	const addNote = () => {
		let noteObj = {
			id: nanoid(),
			body: "Start Writing here",
			title: `New Note ${notes.length + 1}`,
		};

		setNotes((oldNotes) => [...oldNotes, noteObj]);
	};

	const getCurrentNote = () => {
		let currentNote = notes.find(
			(note) => note.id === currentNoteIndex
		);

		console.log(currentNote);
	};

	const deleteNote = (id) => {
		setNotes((oldNotes) => {
			return oldNotes.filter(
				(note) => note.id !== id
			);
		});
	};

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
			<ul className="notes">
				{notes &&
					notes.map((note) => {
						let isSelected =
							currentNoteIndex === note.id;
						return (
							<li
								className={`note ${
									isSelected
										? "selected-note"
										: ""
								}`}
								key={note.id}
								onClick={() =>
									setCurrentNoteIndex(
										note.id
									)
								}
							>
								{note.title}
								<span
									className="note-delete"
									onClick={() =>
										deleteNote(note.id)
									}
								>
									❌
								</span>
							</li>
						);
					})}
			</ul>
		</aside>
	);
}

export default Sidebar;
