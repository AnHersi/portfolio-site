import Card from "react-bootstrap/Card";
import { FC } from "react";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface Props {
	imgPath: string;
	title: string | undefined;
	description: string | undefined;
	demoLink: string | undefined;
	githubLink: string | undefined;
}

const ProjectCard: FC<Props> = (props: Props) => {
	return (
		<Card className="project-card-view">
			<Card.Img variant="top" src={props.imgPath} alt="card-img" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.description}</Card.Text>
			</Card.Body>
			<Card.Footer className="mb-3">
				<Button variant="primary" href={props.githubLink} target="_blank">
					<BsGithub /> &nbsp;
					{"GitHub"}
				</Button>
				{props.demoLink && (
					<Button
						variant="primary"
						href={props.demoLink}
						target={props.title == "Portfolio" ? "_self" : "_blank"}
					>
						<CgWebsite /> &nbsp;
						{"Demo"}
					</Button>
				)}
			</Card.Footer>
		</Card>
	);
};
export default ProjectCard;
