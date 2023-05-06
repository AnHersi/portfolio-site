import axios from "axios";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const fetchData = () => {
	return (dispatch: any) => {
		axios
			.get("https://portfolio-backend-new.vercel.app/data")
			.then((response) => {
				const data = response.data;
				dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
};
