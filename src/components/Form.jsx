import React, { useEffect, useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Form = () => {
  const { saveTodo ,edit ,updateTodo} = useContext(TodoContext);

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.editMode){
        updateTodo(edit.todos.id , text)
    }else{
        saveTodo(text);
    }
    setText("")
  };

  useEffect(()=>{
    setText(edit.todos.text)
  },[edit])
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 my-5">
        <input
          type="text"
          className="form-control rounded-0"
          placeholder="Enter Text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
      </div>

      <button type="submit" className="btn btn-success w-100 rounded-0">
        Save
      </button>
    </form>
  );
};

export default Form;
