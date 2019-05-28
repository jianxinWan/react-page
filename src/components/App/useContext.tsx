import React from 'react';
import ChildrenComponent from './childrenComponent';
interface InitialState {
  name: string;
}

const initialState: InitialState = {
  name: 'origin'
};

const MyContext = React.createContext({
  user: initialState
});

export default () => {
  return (
    <MyContext.Provider
      value={{
        user: initialState
      }}
    >
      <ChildrenComponent />
    </MyContext.Provider>
  );
};
