import { useState } from "react";
import styles from "./form.module.css"
export default function Form({ todos, setTodos }) {
                                                            // const [todo, setTodo] = useState(""); 
  const [todo, setTodo] = useState({name: "",done:false});  //this is due to the pass in the todo a object 
  function handlesubmit(e) {
    e.preventDefault();                                      //due to this default function when we
                                                             //submit the form the data inside it would not be become empty
    setTodos([...todos, todo]);                              //this ...todos is an soread opertor which saves the previous value
                                                             // console.log(todos);  //this will give an empty array because it will
                                                             //synchronously executing that function that's why firstly it will console
                                                             //and then it will execute the settodos([todo])
    setTodo({name:"",done:false});
  }
  return (
      <form className={styles.todoform} onSubmit={handlesubmit}>
        <div className={styles.inputContainer}>
        <input className={styles.modernInput}
          onChange={(e) => setTodo({name:e.target.value,done: false})}
          value={todo.name}
          type="text"
          placeholder="enter the todo item......"
        />
        <button className={styles.modernButton}type="submit">ADD</button>
        </div>
      </form>
  );
}
