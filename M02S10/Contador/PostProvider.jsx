import { createContext, useState, useEffect, useMemo } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Calcula o total de posts por tipo
  const totalPorTipo = useMemo(() => {
    // Inicializa o objeto com os totais iniciais
    const totaisInicias = {
      noticia: 0,
      artigo: 0,
      video: 0,
    };

    return posts.reduce((acumulador, post) => {
      // Pega o tipo do post e converte para lowercase
      const tipo = post.tipo.toLowerCase();

      // Verifica se o tipo já existe no objeto acumulador
      if (acumulador.hasOwnProperty(tipo)) {
        // Se existir, incrementa o total
        acumulador[tipo]++;
      }

      // Retorna o objeto acumulador
      return acumulador;
    }, totaisInicias); // Inicializa o acumulador com os totais iniciais
  }, [posts]); // Recalcula o total sempre que a lista de posts mudar

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

  const value = {
    posts,
    addPost,
    handleDelete,
    totalPorTipo,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostProvider;
