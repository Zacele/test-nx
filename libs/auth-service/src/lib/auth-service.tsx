import React from 'react';
// import { IUser } from '../api/types';

type State = {
  authUser: any
};

type Action = {
  type: string;
  payload: any
};

type Dispatch = (action: Action) => void;

const initialState: State = {
  authUser: null,
};

type AuthContextProviderProps = { children: React.ReactNode };

const StateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        authUser: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = React.useContext(StateContext);

  if (context) {
    return context;
  }

  throw new Error(`useStateContext must be used within a AuthContextProvider`);
};

export default AuthContextProvider
