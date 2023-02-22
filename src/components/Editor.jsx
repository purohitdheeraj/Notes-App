import React from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

function Editor(props) {
	const { notes, currentNote, updateNote } = props;

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
					height="100%"
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
