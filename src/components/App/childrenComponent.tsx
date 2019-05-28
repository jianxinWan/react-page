import React, { useState, useContext } from 'react';

function ChildrenComponent() {
  const [state, setState] = useState(0);
  // const { user } = useContext();
  // console.log(user);
  return (
    <React.Fragment>
      {state}
      <button onClick={() => setState(state + 1)} />
    </React.Fragment>
  );
}

export default ChildrenComponent;
