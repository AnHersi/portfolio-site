import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileSVG from "../../assets/profile.svg";
import Tilt from "react-parallax-tilt";
import { useSelector } from "react-redux";
import { selectData } from "../../service/selectors";
// @ts-ignore
import HeadShake from "react-reveal/HeadShake";
import Data from "../types";

const About: FC = () => {
	const data: Data = useSelector(selectData);

	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={7} className="home-about-description">
						<HeadShake>
							<h1 style={{ fontSize: "2.6em" }}>
								{data?.home?.about?.heading?.text}{" "}
								<span className="blue">{data?.home?.about?.heading?.focus}</span>
							</h1>
						</HeadShake>

						<p className="home-about-body px-5">
							{data?.home?.about?.paragraphs?.[0].text?.[0] + " "}
							<b className="blue"> {data?.home?.about?.paragraphs?.[0].focus?.[0]} </b>
							{data?.home?.about?.paragraphs?.[0].text?.[1]}
							<br />
							<br />
							Throughout my professional and academic journey, I have had the opportunity to work
							with a variety of cutting-edge technologies. From front-end frameworks like{" "}
							<span className="blue">React</span> to back-end technologies like{" "}
							<span className="blue">Node.js and MongoDB</span>, I have developed a strong
							proficiency in a wide range of tools and programming languages. In addition to my
							technical skills, I am also experienced in utilising{" "}
							<span className="blue">Git and Github</span> for version control as well as automated
							tests using tools such as <span className="blue">Jest and Cypress</span>.
							<br />
							<br />
							Whether I am working on a complex project or developing a simple prototype, I always
							strive to leverage the{" "}
							<span className="blue">latest and most effective technologies</span> to ensure that my
							solutions are of the highest quality.
						</p>
					</Col>
					<Col md={5} className="profile">
						<Tilt>
							<img src={profileSVG} className="img-fluid" alt="profile" />
						</Tilt>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
export default About;
