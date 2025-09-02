import React, { useContext } from 'react';
import { PostContext } from './PostsProvider'; // Importe o contexto

export default function PostStats() {
  // Pega o objeto com os totais do contexto
  const { totalPorTipo } = useContext(PostContext);

  return (
    <div className="post-stats-container">
      <h3>Resumo por Categoria</h3>
      <ul>
        <li>Notícias: <strong>{totalPorTipo.noticia}</strong></li>
        <li>Artigos: <strong>{totalPorTipo.artigo}</strong></li>
        <li>Vídeos: <strong>{totalPorTipo.video}</strong></li>
      </ul>
    </div>
  );
}
