import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-gray-200 h-fit p-20">
			<Navbar />
			<Header />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
