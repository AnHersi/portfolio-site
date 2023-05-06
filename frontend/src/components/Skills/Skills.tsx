import { FC } from "react";
import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import developmentAnimation from "../../assets/development.gif";
import { useSelector } from "react-redux";
import { selectData } from "../../service/selectors";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { SiPhp } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { ImNpm } from "react-icons/im";
import { SiJest } from "react-icons/si";
import cypress from "../../assets/cypress.svg";
import { SiTypescript } from "react-icons/si";
// @ts-ignore
import Bounce from "react-reveal/Bounce";

const Skills: FC = () => {
	const data = useSelector(selectData);

	return (
		<Container fluid>
			<Container className="home-skills-section">
				<Row>
					<Col md={5} className="development-animation">
						<img src={developmentAnimation} className="img-fluid" alt="development" />
					</Col>
					<Col md={7} className="home-skills-description">
						<h1 style={{ fontSize: "2.6em" }}>
							{data?.home?.skills?.heading?.text?.[0]}{" "}
							<span className="blue">{data?.home?.skills?.heading?.focus}</span>{" "}
							{data?.home?.skills?.heading?.text?.[1]}
						</h1>
						<Row className="home-skills-icons mt-5">
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[0]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce>
										<FaReact
											style={{ color: "rgb(128, 216, 248)", scale: "3.5" }}
											className="spin"
										/>
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[1]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={100}>
										<IoLogoNodejs style={{ color: "rgb(82, 150, 66)", scale: "3.5" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[2]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={200}>
										<SiExpress
											style={{
												color: "black",
												scale: "3",
												backgroundColor: "white",
												borderRadius: "10px",
												padding: "3px",
											}}
										/>
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[3]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={300}>
										<AiFillHtml5 style={{ color: "rgb(206, 87, 53)", scale: "3.5" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[4]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={400}>
										<IoLogoCss3 style={{ color: "rgb(86, 156, 216)", scale: "3.3" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[5]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={500}>
										<SiJavascript style={{ color: "rgb(244, 222, 80)", scale: "3" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[6]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={600}>
										<SiJquery style={{ color: "rgb(51, 120, 206)", scale: "3" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[7]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={700}>
										<SiRedux style={{ color: "rgb(111, 80, 182)", scale: "3" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[8]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={800}>
										<DiGit style={{ color: "rgb(223, 91, 63)", scale: "4" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[9]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={900}>
										<SiBootstrap style={{ color: "rgb(114, 87, 173)", scale: "3.5" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[10]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={1000}>
										<SiMongodb style={{ color: "rgb(90, 148, 77)", scale: "3.5" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[11]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={1100}>
										<AiOutlineGithub style={{ color: "rgb(255, 255, 255)", scale: "3.5" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[12]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={1200}>
										<SiPhp style={{ color: "rgb(119, 124, 175)", scale: "4" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[13]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={1300}>
										<DiMysql
											style={{
												color: "rgb(36, 85, 107)",
												scale: "3",
												backgroundColor: "white",
												borderRadius: "10px",
												padding: "0.75px",
											}}
										/>
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[14]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={1400}>
										<ImNpm style={{ color: "rgb(187, 68, 62)", scale: "2.7" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[15]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={1500}>
										<SiJest style={{ color: "rgb(143, 72, 91)", scale: "3" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[16]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={1600}>
										<img
											src={cypress}
											alt="cypress"
											style={{
												backgroundColor: "white",
												width: "60px",
												padding: "5px",
												transform: "translate(-50px, -50px)",
											}}
										/>
									</Bounce>
								</Col>
							</OverlayTrigger>
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{data?.home?.skills?.icons?.[17]}</Tooltip>}
							>
								<Col md={2} xs={3} className="mb-5 mt-4">
									<Bounce delay={1700}>
										<SiTypescript style={{ color: "rgb(66, 120, 192)", scale: "2.8" }} />
									</Bounce>
								</Col>
							</OverlayTrigger>
						</Row>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
export default Skills;
