import { FC } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectData } from "../service/selectors";

const Footer: FC = () => {
	const data = useSelector(selectData);

	return (
		<Container fluid className="footer">
			<h3>
				{data?.footer?.text?.[0]}
				<span className="mx-1">{data?.footer?.heart}</span>
				{data?.footer?.text?.[1]}
			</h3>
		</Container>
	);
};

export default Footer;
