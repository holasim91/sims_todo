import React from 'react';
import TodoTemplate from './Components/TodoTemplate';
import ToDoInsert from './Components/ToDoInsert';

function App() {
  return (
    <div className="App">
      <TodoTemplate><ToDoInsert/></TodoTemplate>
    </div>
  );
}

export default App;
