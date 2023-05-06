import { useState, useEffect, FC } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useSelector } from "react-redux";
import Particle from "../components/Particle";
import pdf from "../assets/cv.pdf";
import { selectData } from "../service/selectors";
import type Data from "../components/types";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CV: FC = () => {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	const data: Data = useSelector(selectData);

	return (
		<div>
			<Container fluid className="cv-section">
				<Particle />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
						<AiOutlineDownload />
						&nbsp;{data?.cv?.["btn-label"]}
					</Button>
				</Row>

				<Row className="cv">
					<Document file={pdf} className="d-flex justify-content-center mb-3">
						<Page
							pageNumber={1}
							scale={width > 786 ? 1.7 : 0.6}
							renderTextLayer={false}
							renderAnnotationLayer={false}
						/>
					</Document>
					<Document file={pdf} className="d-flex justify-content-center">
						<Page
							pageNumber={2}
							scale={width > 786 ? 1.7 : 0.6}
							renderTextLayer={false}
							renderAnnotationLayer={false}
						/>
					</Document>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
						<AiOutlineDownload />
						&nbsp;{data?.cv?.["btn-label"]}
					</Button>
				</Row>
			</Container>
		</div>
	);
};

export default CV;
