import { FC } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";

const Contact: FC = () => {
	return (
		<section id="contact">
			<Container style={{ padding: "60px" }}>
				<Particle />
				<ContactForm />
			</Container>
		</section>
	);
};

export default Contact;
