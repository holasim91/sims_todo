import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./ToDoInsert.scss";

export default function ToDoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

//   const onSubmit = useCallback(
//     (e) => {
//         console.log('?')
//       onInsert(value);
//       setValue('');
//       e.preventDefalut();
//     },
//     [onInsert, value]
//   );
const onClick = useCallback(
    () => {
        onInsert(value)
        setValue('')
    },
    [onInsert, value],
)

  return (
    <div className="ToDoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}>
        <MdAdd />
      </button>
    </div>
  );
}
