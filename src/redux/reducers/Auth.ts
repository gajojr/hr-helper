import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		authenticated: false,
		fullName: '',
		email: '',
		linkedin: '',
		github: '',
		pdfFile: '',
	},
	reducers: {
		selectAuthenticated: (state, action) => {
			state.authenticated = action.payload;
		},
		selectFullName: (state, action) => {
			state.fullName = action.payload;
		},
		selectEmail: (state, action) => {
			state.email = action.payload;
		},
		selectLinkedin: (state, action) => {
			state.linkedin = action.payload;
		},
		selectGithub: (state, action) => {
			state.github = action.payload;
		},
		selectPdfFile: (state, action) => {
			state.pdfFile = action.payload;
		},
	},
});

export const {
	selectAuthenticated,
	selectFullName,
	selectEmail,
	selectLinkedin,
	selectGithub,
	selectPdfFile,
} = authSlice.actions;
export default authSlice.reducer;
