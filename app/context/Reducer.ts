import { MainState, MainAction } from './MainContext';

export const reducer = (state: MainState, action: MainAction): MainState => {

    switch (action.type) {
        case 'set':
            return {
                ...state,
                paragraph: action.payload || "",
            }
        case "get":
            return {
                ...state,
            }
        case "delete":
            return {
                ...state,
                paragraph: '',
            }
        default:
            return state;
    }
};