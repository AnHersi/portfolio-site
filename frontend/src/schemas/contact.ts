import * as yup from "yup";

const contactSchema = yup.object().shape({
	from_name: yup.string().required("Name field is required"),
	reply_to: yup.string().email("Please enter a valid email").required("Email field is required"),
	message: yup.string().required("Message field is required"),
});

export default contactSchema;
