import React,{ useState, useRef, useCallback }  from "react";
import TodoTemplate from "./Components/TodoTemplate";
import ToDoInsert from "./Components/ToDoInsert";
import ToDoList from "./Components/ToDoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초오",
      checked: false
    },
    {
      id: 2,
      text: "컴포넌트 스타일링",
      checked: true
    },
    {
      id: 3,
      text: "toDoApp만들기이",
      checked: false
    }
  ]);
  //교윳값 id
  // ref를 사용해서 변수 담기
  const netxtId = useRef(4)

  const onInsert = useCallback(
    text => {
      const todo = {
        id: netxtId.current,
        text,
        checked: false
      }
      setTodos(todos.concat(todo));
      netxtId.current +=1;
    },
    [todos],
  )
  return (
    <div className="App">
      <TodoTemplate>
        <ToDoInsert onInsert={onInsert}/>
        <ToDoList todos={todos} />
      </TodoTemplate>
    </div>
  );
}

export default App;
