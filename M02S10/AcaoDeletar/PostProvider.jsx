import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsInLocalStorage =
      JSON.parse(localStorage.getItem("@posts")) || [];
    setPosts(postsInLocalStorage);
  }, []);

  function addPost(post) {
    const newPosts = [...posts, post];
    setPosts(newPosts);
    localStorage.setItem("@posts", JSON.stringify(newPosts));
  }

  const handleDelete = (indexToDelete) => {
    // 1. Filtra a lista usando o índice. O segundo argumento do filter é o índice do item.
    const postsAtualizados = posts.filter(
      (_, index) => index !== indexToDelete,
    );

    // 2. Atualiza o estado
    setPosts(postsAtualizados);

    // 3. Atualiza o localStorage
    localStorage.setItem("@posts", JSON.stringify(postsAtualizados));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, handleDelete }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
