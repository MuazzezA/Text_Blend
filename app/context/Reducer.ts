import { MainState, MainAction, MainStateFiltered } from './MainContext';

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


export const filteredReducer = (state: MainStateFiltered, action: MainAction): MainStateFiltered => {
    switch (action.type) {
        case 'set':
            return {
                ...state,
                filteredParagraph: action.payload || "",
            }
        case "get":
            return {
                ...state,
            }
        case "delete":
            return {
                ...state,
                filteredParagraph: '',
            }
        default:
            return state;
    }
}
