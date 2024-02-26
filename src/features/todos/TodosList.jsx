import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

import { getTodos, addTodo, updateTodo, deleteTodo } from "../../api/todosApi";

const TodosList = () => {
  const [newTodo, setNewTodo] = useState("");
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate Cache and Refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const upadetTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      // Invalidate Cache and Refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidate Cache and Refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutation.mutate({ userId: 4, title: newTodo, completed: false });
    setNewTodo("");
  };

  const newItem = (
    <form>
      <label htmlFor="new-todo">Enter New Todo Item</label>
      <input
        type="text"
        id="new-todo"
        placeholder="enter new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = todos.map((todo) => {
      return (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            id={todo.id}
            onChange={() => {
              upadetTodoMutation.mutate({
                ...todo,
                completed: !todo.completed,
              });
            }}
          />
          <label htmlFor={todo.id}>{todo.title}</label>
          <button
            onClick={() => {
              deleteTodoMutation.mutate({ id: todo.id });
            }}
          >
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <div>
      <h2>TodosList</h2> {newItem}
      {content}
    </div>
  );
};

export default TodosList;
