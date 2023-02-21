import "./App.css";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<Editor />
		</div>
	);
}

export default App;
