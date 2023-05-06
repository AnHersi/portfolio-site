import { useState, useEffect, FC } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import CV from "./pages/CV";
import Footer from "./components/Footer";
// @ts-ignore
import AnimatedCursor from "./components/AnimatedCursor";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useDispatch } from "react-redux";
import { fetchData } from "./service/actions";
import { useSelector } from "react-redux";
import { selectData } from "./service/selectors";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FC = () => {
	const [load, updateLoad] = useState(true);
	const data = useSelector(selectData);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<any>(fetchData());
	}, []);

	useEffect(() => {
		if (data?.home) {
			const timer = setTimeout(() => {
				updateLoad(false);
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [data?.home]);

	return (
		<Router>
			<div className="cursor__dot">
				<AnimatedCursor
					innerSize={15}
					outerSize={40}
					color="16, 33, 145"
					outerAlpha={0.4}
					innerScale={0.6}
					outerScale={2}
					outerStyle={undefined}
					innerStyle={undefined}
					trailingSpeed={undefined}
					clickables={undefined}
				/>
			</div>
			<Preloader load={load} />
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cv" element={<CV />} />
					<Route path="/#projects" element={<Projects />} />
					<Route path="/#contact" element={<Contact />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
