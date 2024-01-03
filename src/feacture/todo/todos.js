// nanoid unique id create
// slice create in create in slices
import { createSlice,nanoid } from "@reduxjs/toolkit";

//   statecreate
const initialState={
     todos:[{id:1,text:"Hello World"}]
}
export const todoSlice=createSlice({
      name:'todo',
      initialState,
      reducers:{
        // propertey
        addTodo:(state,action)=>{
            // Function Defination
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        // remove todo
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id !== action.payload)
        },
      }
})
export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer