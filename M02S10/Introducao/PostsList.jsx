import { Paper } from "@mui/material";
import "./PostsList.css";
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
      <div className="posts">

      {posts.map((post, index) => (
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            width: "100%",
            maxWidth: "800px",
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <img src={post.url} alt={post.titulo} />
          <div className="post-content" key={index}>
            <h2>{post.titulo}</h2>
            <p>{post.conteudo}</p>
            <a className="tag" href="#">
              {post.tipo}
            </a>
            <p>{post.data}</p>
          </div>
        </Paper>
      ))}
        </div>
    </main>
  );
}
