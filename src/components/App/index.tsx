// import React, { useState, useEffect } from 'react';
// import { Map } from 'immutable';
// import Counter from './useReducer';
import Context from './useContext';
// function Counter() {
//   // const [count, setCount] = useState(0);
//   // const [info, setInfo] = useState(Map({}));
//   // useEffect(() => {
//   //   console.log('count change');
//   // }, [count]);
//   // useEffect(() => {
//   //   console.log('info change');
//   // }, [info.hashCode()]);

//   // //对象尽管值一样，但是每次都会触发更新，原因是对象比较时每次的地址都是不一样的，采用immutable.js的hashCode方法对于一样的值就会返回一个相同的Int32位的数字。
//   // return (
//   //   <React.Fragment>
//   //     <div>{count}</div>
//   //     {/* <p>{JSON.stringify(info)}</p> */}
//   //     <button
//   //       onClick={() => {
//   //         setCount(20);
//   //         setInfo(Map({ name: 'origin' }));
//   //       }}
//   //     >
//   //       change
//   //     </button>
//   //     <br />
//   //     <style>
//   //       {`
//   //         button {
//   //           width: 100px;
//   //           height: 30px;
//   //           border: 1px solid #ccc;
//   //         }
//   //       `}
//   //     </style>
//   //   </React.Fragment>
//   // );
// }

export default Context;
