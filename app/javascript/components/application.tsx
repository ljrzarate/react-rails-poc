import axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom";


interface AppProps {
  arg: string;
}

interface Post {
  title: string
}

const App = ({ arg }: AppProps) => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(()=>{
    axios.get("api/posts.json").then((resp) => {
      const posts = resp.data
      setPosts(posts)
    })
  }, [])

  const postTitles = posts.map((post)=>{
    return post["title"]
  })


  return (
    <>
      <div>{`Hello, ${arg}!`}</div>

      <div>{`${postTitles}`}</div>
    </>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<App arg="Rails 7 with ESBuild !!!" />, rootEl);
});