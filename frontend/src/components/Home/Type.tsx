import Typewriter from "typewriter-effect";
import { selectData } from "../../service/selectors";
import { useSelector } from "react-redux";
import { FC } from "react";
import Data from "../types";

const Type: FC = () => {
	const data: Data = useSelector(selectData);

	return (
		<Typewriter
			options={{
				strings: data?.home?.typeOptions,
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
};

export default Type;
