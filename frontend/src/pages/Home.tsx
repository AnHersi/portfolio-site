import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import Particle from "../components/Particle";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

import codingAnimation from "../assets/coding.gif";
import { selectData } from "../service/selectors";
import Data from "../components/types";
import Type from "../components/Home/Type";

const Home: FC = () => {
	const data: Data = useSelector(selectData);

	return (
		<section id="home">
			<Container fluid className="home-section">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								{data?.home?.greeting + " "}
								<span className="wave" role="img" aria-labelledby="wave">
									{data?.home?.wave}
								</span>
								<span>.</span>
							</h1>

							<h1 className="heading-name">
								{data?.home?.prefix}
								<strong className="blue"> {data?.home?.name}</strong>
							</h1>

							<div style={{ padding: 50, textAlign: "left" }}>
								<Type />
							</div>
						</Col>

						<Col md={5} className="heading-animation" style={{ marginBottom: 20 }}>
							<img
								src={codingAnimation}
								alt="Coding animation"
								className="img-fluid"
								style={{ maxHeight: "450px" }}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<About />
			<Skills />
			<Projects />
			<Contact />
		</section>
	);
};

export default Home;
