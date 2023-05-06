import { useState, useRef, FC } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineSend } from "react-icons/ai";
import contactAnimation from "../../assets/contact.gif";
import schema from "../../schemas/contact";
import { useSelector } from "react-redux";
import { selectData } from "../../service/selectors";
import { useFormik } from "formik";
// @ts-ignore
import TaDa from "react-reveal/Tada";
import Data from "../types";

const Contact: FC = () => {
	const [done, setDone] = useState(false);
	const form = useRef<HTMLFormElement>(null);
	const data: Data = useSelector(selectData);

	const sendEmail = async () => {
		try {
			await emailjs.sendForm(
				"service_u7wv922",
				"template_kqx82i1",
				form.current as HTMLFormElement,
				"6Uc7Uw_O716fac51g"
			);
			setDone(true);
			resetForm();
		} catch (error) {
			console.log(error);
		}
	};

	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		errors,
		touched,
		isSubmitting,
		resetForm,
	} = useFormik({
		initialValues: {
			from_name: "",
			reply_to: "",
			message: "",
		},
		validationSchema: schema,
		onSubmit: sendEmail,
	});

	return (
		<Container style={{ paddingTop: "50px" }}>
			<Row>
				<Col md={6} className="contact-form">
					<TaDa duration={1300}>
						<h1 className="blue mb-4">{data?.contact?.heading}</h1>
					</TaDa>
					<h5>{data?.contact?.["sub-heading"]}</h5>
					<form ref={form} onSubmit={handleSubmit}>
						<input
							type="text"
							name="from_name"
							placeholder="Name"
							value={values.from_name}
							onBlur={handleBlur}
							onChange={handleChange}
							className={errors.from_name && touched.from_name ? "input-error" : "user"}
						/>
						{errors.from_name && touched.from_name && (
							<span className="d-flex justify-content-start w-100 px-3 not-done">
								{errors.from_name}
							</span>
						)}
						<input
							type="email"
							name="reply_to"
							placeholder="Email"
							value={values.reply_to}
							onBlur={handleBlur}
							onChange={handleChange}
							className={errors.reply_to && touched.reply_to ? "input-error" : "user"}
						/>
						{errors.reply_to && touched.reply_to && (
							<span className="d-flex justify-content-start w-100 px-3 not-done">
								{errors.reply_to}
							</span>
						)}
						<textarea
							name="message"
							placeholder="Message"
							value={values.message}
							onBlur={handleBlur}
							onChange={handleChange}
							className={errors.message && touched.message ? "input-error" : "user"}
						/>
						{errors.message && touched.message && (
							<span className="d-flex justify-content-start w-100 px-3 not-done">
								{errors.message}
							</span>
						)}
						<Button
							type="submit"
							className="button d-flex justify-content-center align-items-center"
							disabled={Object.keys(errors).length > 0 || isSubmitting}
						>
							{isSubmitting ? (
								<div className="loader"></div>
							) : (
								<span>
									Send <AiOutlineSend style={{ marginLeft: "7px" }} />
								</span>
							)}
						</Button>
						<span className="done">{done && "Thanks for Contacting me"}</span>
					</form>
				</Col>
				<Col md={6} className="contact-animation">
					<img src={contactAnimation} alt="Contact animation" style={{ maxHeight: "450px" }} />
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
