import {createContext, useContext} from 'react';
import {useReducer} from 'react';
import {reducer, filteredReducer} from './Reducer';

type MainContextProviderProps = {
  children?: React.ReactNode;
};
type MainContextProps = {
  state: MainState;
  dispatch: React.Dispatch<MainAction>;
  stateFiltered: MainStateFiltered;
  dispatchFiltered: React.Dispatch<MainAction>;
};

export type MainState = {
  paragraph: string;
};
export type MainStateFiltered = {
  filteredParagraph: string[];
};
export type MainAction = {
  type: 'set' | 'get' | 'delete';
  payload?: string | string[];
};

const initialState: MainState = {
  paragraph:
    'Text Blend is a mobile application designed to generate classic questions based on the given input text. With Text Blend, users can easily create a variety of different questions based on any text input, making it a versatile and useful tool for anyone looking to generate questions quickly and efficiently. Give it a try and see for yourself how it can simplify the process of question generation!',
};

const initialStateFiltered: MainStateFiltered = {
  filteredParagraph: [],
};

export const MainContext = createContext<MainContextProps>({
  state: initialState,
  dispatch: () => null,
  stateFiltered: initialStateFiltered,
  dispatchFiltered: () => null,
});

export const MainContextProvider: React.FC<MainContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateFiltered, dispatchFiltered] = useReducer(
    filteredReducer,
    initialStateFiltered,
  );
  const value = {state, dispatch, stateFiltered, dispatchFiltered};
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
