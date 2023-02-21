import { nanoid } from "nanoid";
import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

function App() {
	const [notes, setNotes] = useState([]);

	const [currentNoteId, setCurrentNoteId] = useState(
		(notes[0] && notes[0].id) || ""
	);

	const addNote = () => {
		let noteObj = {
			id: nanoid(),
			body: "Start Writing here",
			title: `New Note ${notes.length + 1}`,
		};

		setNotes((oldNotes) => [noteObj, ...oldNotes]);
	};

	const deleteNote = (id) => {
		setNotes((oldNotes) => {
			return oldNotes.filter(
				(note) => note.id !== id
			);
		});
	};

	// helper
	const getCurrentNote = () => {
		let currentNote =
			notes.find(
				(note) => note.id === currentNoteId
			) || notes[0];

		console.log(currentNote);
		return currentNote;
	};

	return (
		<div className="App">
			<Sidebar
				notes={notes}
				addNote={addNote}
				deleteNote={deleteNote}
				currentNote={getCurrentNote()}
				setCurrentNoteId={setCurrentNoteId}
			/>
			<Editor />
		</div>
	);
}

export default App;
