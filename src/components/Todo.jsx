import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
 const completedTodos= todos.filter((todo) => todo.done).length;     //this filter function is used to separate the objects on the condition basis dependent
 const totalTodos= todos.length;
 // const [todo,setTodo]=useState("");
  // const [todos,setTodos]=useState([])   //this todos is to save the
  ///items of the todo which are written in the form
  // function handlesubmit(e){
  //     e.preventDefault();       //due to this default function when we
  //                               //submit the form the data inside it would not be become empty
  //     setTodos([...todos,todo]) //this ...todos is an soread opertor which saves the previous value
  //                               // console.log(todos);  //this will give an empty array because it will
  //                               //synchronously executing that function that's why firstly it will console
  //                                //and then it will execute the settodos([todo])
  //     setTodo("")               //when we added the work then the text inside should be empty
  // }
  return (
    <div>
      {/* /* <form onSubmit={handlesubmit}>
            <input onChange={(e)=>setTodo(e.target.value)}  value={todo} type="text"/>
            <button type="submit">ADD</button>
        </form> */}
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
      {/* {todos.map((item)=>(
            <TodoItem key={item} item={item}/>           //this means it returning a component
        ))} */}
    </div>
  ); //both  {console.log(todos)} nd {todos } are same things the difference is thtat todos print on the screen
}
