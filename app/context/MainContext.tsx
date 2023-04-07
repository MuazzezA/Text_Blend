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
    'Sed sed velit dui. Praesent mollis lacus at turpis auctor posuere. Nullam id imperdiet dolor. Aenean finibus sed ex quis efficitur. Nam ac maximus augue, eu pellentesque nisi. Curabitur ullamcorper.',
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
