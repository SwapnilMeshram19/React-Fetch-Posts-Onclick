import { useState } from "react";
import Post from "./Components/Post"
import "./App.css";
function App() {
  const [data,setData]=useState([]);
  const fetchPost=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    setData(await res.json())
  }
  console.log(data)
  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={()=>fetchPost()}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {
          data&&data.map((ele)=><Post postData={ele} key={ele.id}/>)
        }
      </div>
    </div>
  );
}

export default App;
