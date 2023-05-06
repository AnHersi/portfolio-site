import { FC } from "react";
interface Props {
	load: string | boolean;
}
const Preloader: FC<Props> = (props: Props) => {
	return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Preloader;
