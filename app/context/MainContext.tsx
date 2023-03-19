import {createContext, useContext} from 'react';
import {useReducer} from 'react';
import {reducer} from './Reducer';

type MainContextProviderProps = {
  children?: React.ReactNode;
};
type MainContextProps = {
  state: MainState;
  dispatch: React.Dispatch<MainAction>;
};

export type MainState = {
  paragraph: string;
};
export type MainAction = {
  type: 'set' | 'get' | 'delete';
  payload?: string;
};

const initialState: MainState = {
  paragraph: '',
};

export const MainContext = createContext<MainContextProps>({
  state: initialState,
  dispatch: () => null,
});

export const MainContextProvider: React.FC<MainContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
