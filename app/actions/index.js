import EMAIL_CHANGED from './types';

export const validateInput = (text) => {
	return{
		type: EMAIL_CHANGED,
		payload: 'text'
	};
};