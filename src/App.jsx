import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import Split from "react-split";

function App() {
	const [notes, setNotes] = useState(
		() =>
			JSON.parse(localStorage.getItem("notes")) || []
	);

	const [currentNoteId, setCurrentNoteId] = useState(
		(notes[0] && notes[0].id) || ""
	);

	useEffect(() => {
		localStorage.setItem(
			"notes",
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = () => {
		let noteObj = {
			id: nanoid(),
			body: "",
			title: `New Note ${notes.length + 1}`,
		};

		setNotes((oldNotes) => [noteObj, ...oldNotes]);
		setCurrentNoteId(noteObj.id);
	};

	const deleteNote = (id) => {
		setNotes((oldNotes) => {
			return oldNotes.filter(
				(note) => note.id !== id
			);
		});
	};

	// helper - for existing notes Arr
	// if not present then undefined
	const getCurrentNote = () => {
		let currentNote =
			notes.find(
				(note) => note.id === currentNoteId
			) || notes[0];

		return currentNote;
	};

	const updateNote = (bodyText) => {
		setNotes((oldNotes) => {
			return oldNotes.map((note) => {
				return note.id === currentNoteId
					? {
							...note,
							body: bodyText,
							title:
								bodyText.split("\n")[0] ||
								note.title,
					  }
					: note;
			});
		});
	};

	return (
		<div className="App">
			<Split
				sizes={[40, 60]}
				direction="horizontal"
				className="split"
			>
				<Sidebar
					notes={notes}
					addNote={addNote}
					deleteNote={deleteNote}
					currentNote={getCurrentNote()}
					setCurrentNoteId={setCurrentNoteId}
				/>
				<Editor
					notes={notes}
					currentNote={getCurrentNote()}
					updateNote={updateNote}
				/>
			</Split>
		</div>
	);
}

export default App;
