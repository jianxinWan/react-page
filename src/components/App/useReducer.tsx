import React from 'react';
import { useReducer } from 'react';

interface InitialState {
  count: number;
}
interface Action {
  type: string;
}

const initialState: InitialState = { count: 0 };

function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      Count: {state.count}
      <button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        -
      </button>
      <style>
        {`
            button{
              width: 100px;
              height: 30px;
            }
          `}
      </style>
    </React.Fragment>
  );
}

export default Counter;
