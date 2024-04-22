import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FindDoctors from "./pages/FindDoctors";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/find-doctors" element={<FindDoctors />} />
			</Routes>
		</>
	);
}

export default App;
