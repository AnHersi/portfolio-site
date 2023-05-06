import { useState, FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// @ts-ignore
import { HashLink } from "react-router-hash-link";
import { MdOutlineContactMail } from "react-icons/md";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectData } from "../service/selectors";

import { CgFileDocument } from "react-icons/cg";

const NavBar: FC = () => {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}

	window.addEventListener("scroll", scrollHandler);

	const data = useSelector(selectData);

	return (
		<Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
			<Container>
				<Navbar.Brand href="/" className="d-flex">
					<img src={logo} className="img-fluid logo" alt="brand" />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => {
						updateExpanded(expand ? false : true);
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link as={HashLink} to="/#home" onClick={() => updateExpanded(false)}>
								<AiOutlineHome style={{ marginBottom: "2px", marginRight: "7px" }} />{" "}
								{data?.home?.label}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/cv" onClick={() => updateExpanded(false)}>
								<CgFileDocument style={{ marginBottom: "2px", marginRight: "7px" }} />{" "}
								{data?.cv?.label}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={HashLink} to="/#projects" onClick={() => updateExpanded(false)}>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: "2px", marginRight: "7px" }}
								/>{" "}
								{data?.projects?.label}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={HashLink} to="/#contact" onClick={() => updateExpanded(false)}>
								<MdOutlineContactMail style={{ marginBottom: "2px", marginRight: "7px" }} />{" "}
								{data?.contact?.label}
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
