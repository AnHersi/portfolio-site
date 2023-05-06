import { FETCH_DATA_SUCCESS } from "./actions";

const initialState = {
	data: "",
};

function dataReducer(state = initialState, action: any) {
	switch (action.type) {
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
}

export default dataReducer;
