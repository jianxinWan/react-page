import { useState, useEffect } from 'react';
import { Map } from 'immutable';

function useCityInfo(cityInfo: string) {
  const [info, setInfo] = useState(Map({}));
  useEffect(() => {
    setInfo(
      Map({
        city: cityInfo
      })
    );
  }, [info]);
  return info;
}

// function TextInputWithFocusButton() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` 指向已挂载到 DOM 上的文本输入元素
//     // inputEl.current.focus();
//   };
//   // return (
//   //   <React.Fragment>
//   //     <input ref={inputEl} type="text" />
//   //     <button onClick={onButtonClick}>Focus the input</button>
//   //   </React.Fragment>
//   // );
// }

export default useCityInfo;
