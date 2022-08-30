import axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom";
import HomePage from "../Pages/home/homePage";

const App = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get("api/posts.json").then((resp) => {
      const posts = resp.data;
      setPosts(posts);
    });
  }, []);

  const postTitles = posts.map((post) => {
    return post["title"];
  });

  return (
    <>
      <HomePage />
      <div>{`${postTitles}`}</div>
      <div>SOMETHING</div>
    </>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<App />, rootEl);
});
