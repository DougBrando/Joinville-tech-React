import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsInLocalStorage = JSON.parse(localStorage.getItem("@posts")) || [];
    setPosts(postsInLocalStorage);
  }, []);

  function addPost(post){
    const newPosts = [...posts, post];
    setPosts(newPosts);
    localStorage.setItem("@posts", JSON.stringify(newPosts));
  }

  return(
    <PostContext.Provider value={{posts, addPost}}>
      {children}
      </PostContext.Provider>
  );
}

export default PostProvider
