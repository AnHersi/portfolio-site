import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
import gazetteer from "../../assets/projects/gazetteer.png";
import companyDirectory from "../../assets/projects/companyDirectory.png";
import invoiceLogs from "../../assets/projects/invoiceLogs.png";
import portfolioSite from "../../assets/projects/portfolioSite.png";
import issuesTracker from "../../assets/projects/issuesTracker.png";
import summarise from "../../assets/projects/summarise.png";
import { useSelector } from "react-redux";
import { selectData } from "../../service/selectors";
// @ts-ignore
import Pulse from "react-reveal/Pulse";
import Data from "../types";

const Projects: FC = () => {
	const projects = [
		summarise,
		issuesTracker,
		gazetteer,
		companyDirectory,
		invoiceLogs,
		portfolioSite,
	];
	const data: Data = useSelector(selectData) || null;

	return (
		<section id="projects">
			<Container fluid className="project-section">
				<Particle />
				<Container>
					<Pulse duration={1300}>
						<h1 className="project-heading">
							{data?.projects?.heading.main.text}{" "}
							<strong className="blue">{data?.projects?.heading.main.focus}</strong>
						</h1>
					</Pulse>

					<p style={{ color: "white" }}>{data?.projects?.heading.sub}</p>
					<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
						{projects.map((project, index) => {
							return (
								<Col md={4} className="project-card">
									<ProjectCard
										imgPath={project}
										title={data?.projects?.projects?.[index].title}
										description={data?.projects?.projects?.[index].description}
										githubLink={data?.projects?.projects?.[index].githubLink}
										demoLink={data?.projects?.projects?.[index].demoLink}
									/>
								</Col>
							);
						})}

						<Col md={4}></Col>
						<Col md={4}></Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
};

export default Projects;
