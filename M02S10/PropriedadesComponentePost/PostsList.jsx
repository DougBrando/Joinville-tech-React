import "./PostsList.css";
import Post from "./src/components/Post";
import { useEffect, useState } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const postsInLocalStorage =
      JSON.parse(localStorage.getItem("@posts")) || [];
    setPosts(postsInLocalStorage);
    setTotal(postsInLocalStorage.length);
  }, []);

  return (
    <main>
      <h1>Posts</h1>
      <p>
        Atualmente, voce tem <strong>{total} posts</strong> cadastrados
      </p>
      {posts.map((post, index) => (
        <Post
          key={index}
          url={post.url}
          titulo={post.titulo}
          conteudo={post.conteudo}
          tipo={post.tipo}
          data={post.data}
        />
      ))}
    </main>
  );
}
