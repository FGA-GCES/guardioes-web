import {
    SET_EMAIL, 
    SET_TOKEN, 
	SET_USER,
	SET_ADMIN_CATEGORIES,
	SET_APPS
} from 'constants/action-types';

const initialState = {
	email: "",
	token: "",
	user: {},
	admin_categories: {
		config_app: false,
		manager: false,
		users: false,
		symptoms: false,
		syndromes: false,
		contents: false,
		dashboard: false
	},
	apps: []
};

const User = (state = initialState, action) => {
	switch (action.type) {
		case SET_EMAIL:
			return {
				...state,
				email: action.payload,
			};
		case SET_USER:
			return {
				...state,
				user: action.payload,
			};
		case SET_TOKEN:
			return {
				...state,
				token: action.payload,
			};	
		case SET_ADMIN_CATEGORIES:
			return {
				...state,
				admin_categories: action.payload,
			};
		case SET_APPS:
			return {
				...state,
				apps: action.payload
			};
		default:
			return {
				...state,
			};
	}
};

export default User;
