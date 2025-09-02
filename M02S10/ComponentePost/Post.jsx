import { Paper } from "@mui/material";

import { useEffect, useState } from "react";

export default function Post(){

  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const postsInLocalStorage =
      JSON.parse(localStorage.getItem("@posts")) || [];
    setPosts(postsInLocalStorage);
    setTotal(postsInLocalStorage.length);
  }, []);


  return(
      <div className="posts">
      <p>
        Atualmente, voce tem <strong>{total} posts</strong> cadastrados
      </p>
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
  )

}
