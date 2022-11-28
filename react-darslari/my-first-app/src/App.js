import React, {useState} from "react";
import './style/styles.css';
import TableList from "./components/TableList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";



function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", stack: "MERN Stack"},
    {id: 2, title: "Python", stack: "Full Stack"},
    {id: 3, title: "Java", stack: "Back End"},
    {id: 4, title: "Golang", stack: "Cuber Security"}
  ]);

  const [title, setTitle] = useState('')
  const [stack, setStack] = useState('')

  const addPost = (e)=>{
    e.preventDefault()
    const newPost ={
      id: Date.now(),
      title,
      stack
    }

    setPosts([...posts, newPost])
    setTitle('')
    setStack('')

  }
  
  return (    
      <div className='app'>
        <h1>Azizbek yaxshi bo'ng</h1>
        <form>
          <h4 className="text-center">Create Your Post</h4>
          <MyInput
            type="text"
            className="form-control my-2"
            placeholder="Programming Language"
            value = {title}
            onChange = {e => setTitle(e.target.value)}
          />

          <MyInput
            type="text"
            className="form-control my-2"
            placeholder="Favourite Stack"
            value = {stack}
            onChange = {e => setStack(e.target.value)}
          />

          <MyButton onClick ={addPost}>
            Add Postads
          </MyButton>
        </form>
        <TableList posts={posts} title="Programming Languages"/>
      </div>    
  );
  
}

export default App;
