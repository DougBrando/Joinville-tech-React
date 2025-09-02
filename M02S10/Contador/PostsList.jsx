import PostStats from "./PostStats";
import "./PostsList.css";
import { PostContext } from "./PostsProvider";
import Post from "./src/components/Post";
import { useContext, useEffect, useState } from "react";

export default function PostsList() {
  const { posts, handleDelete } = useContext(PostContext);

  return (
    <main>
      <h1>Posts</h1>
      <p>
        Atualmente, voce tem <strong>{posts.length} posts</strong> cadastrados
        <p>
        <PostStats />
        </p>
      </p>
      {posts.map((post, index) => (
        <Post
          key={index}
          url={post.url}
          titulo={post.titulo}
          conteudo={post.conteudo}
          tipo={post.tipo}
          data={post.data}
          // Função para deletar o post
          index={index}
          handleDelete={handleDelete}
        />
      ))}
    </main>
  );
}
