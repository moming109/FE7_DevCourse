import { createSlice } from '@reduxjs/toolkit';
export const todosSlice = createSlice({
  name: 'todosSlice',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo : (state, text) => {
        const uuid = (
          Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
        ).toUpperCase();
        state.todos = [
          ...state.todos,
          {
            id: uuid,
            text,
            completed: false,
          },
        ];
      },
      toggleTodo : (state, id) => {
          state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      },
       updateTodo :(id: string, text: string) => {
        setTodos((todos) =>
          todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
        );
      },
       deleteTodo : (id: string) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
      },

  },
});

export {} = slice.actions;
export default slice.reducer;