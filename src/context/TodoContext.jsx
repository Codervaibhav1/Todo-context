import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    todos: {},
    editMode: false,
  });

  //delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //save
  const saveTodo = (text) => {
    const newText = {
      id: crypto.randomUUID(),
      text: text,
    };
    setTodos([newText, ...todos]);
  };
  //edit
  const editTodo = (todos) => {
    setEdit({
      todos: todos,
      editMode: true,
    });
  };

  //update
  const updateTodo=(oldId , newText)=>{
    setTodos(todos.map((todo)=> todo.id === oldId ? { ...todo, text: newText } : todo))
    setEdit({todos:{} , editMode:false})
  }
  return (
    <TodoContext.Provider
      value={{ todos, edit, deleteTodo, saveTodo, editTodo, updateTodo}}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
