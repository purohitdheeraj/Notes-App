import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

function Editor(props) {
	const { notes, currentNote, updateNote } = props;

	// const [value, setValue] = useState("");

	return (
		<main className="editor">
			{notes.length > 0 ? (
				<MDEditor
					value={currentNote.body}
					onChange={updateNote}
					placeholder="Write Here"
					previewOptions={{
						rehypePlugins: [[rehypeSanitize]],
					}}
					height="90vh"
				/>
			) : (
				<div>
					<h2>No Notes!</h2>
					Add + button to add a note
				</div>
			)}
		</main>
	);
}

export default Editor;
