import "./Form.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "react-lottie";
import LoadingAnimation from "./assets/loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Form() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const [tipo, setTipo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function salvarPost(event) {
    event.preventDefault();

    if (titulo === "" && conteudo === "") {
      toast.error("Preencha o titulo e o conteudo");
    } else if (!url.startsWith("http")) {
      toast.error("URL deve começar com http");
    } else if (tipo === "") {
      toast.error("Selecione o tipo");
    } else if (new Date(data) < new Date()) {
      toast.error("Data deve ser no presente ou futuro");
    } else {
      setIsLoading(true); // Começa a animação de loading

      const newPost = {
        titulo: titulo,
        conteudo: conteudo,
        url: url,
        data: data,
        tipo: tipo,
      };

      // pegar os posts que estão no localStorage
      let allPostsInStorage = localStorage.getItem("@posts");

      // se não tiver posts, retorna um array vazio
      allPostsInStorage = !allPostsInStorage
        ? []
        : JSON.parse(allPostsInStorage);

      // adicionar o novo post no array
      allPostsInStorage.push(newPost);

      // salvar no localStorage
      localStorage.setItem("@posts", JSON.stringify(allPostsInStorage));

      setTimeout(() => {
        toast.success("Post salvo com sucesso");
        setTitulo("");
        setConteudo("");
        setUrl("");
        setData("");
        setTipo("");
        setIsLoading(false); // Esconde a animação de loading após 2 segundos
      }, 2000);
    }
  }

  return (
    <form onSubmit={salvarPost}>
      <h1>Cadastro de Post</h1>

      <label htmlFor="titulo">Titulo</label>
      <input
        type="text"
        id="titulo"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />
      <label htmlFor="conteudo">Conteudo</label>
      <input
        type="text"
        id="conteudo"
        value={conteudo}
        onChange={(event) => setConteudo(event.target.value)}
      />
      <label htmlFor="url">URL</label>
      <input
        type="text"
        id="url"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <label htmlFor="data">Data</label>
      <input
        type="date"
        id="data"
        value={data}
        onChange={(event) => setData(event.target.value)}
      />
      <label htmlFor="tipo">Tipo</label>
      <select
        id="tipo"
        value={tipo}
        onChange={(event) => setTipo(event.target.value)}
      >
        <option value="">Selecione</option>
        <option value="Noticia">Noticia</option>
        <option value="Artigo">Artigo</option>
        <option value="Video">Video</option>
      </select>

      {isLoading ? (
        <Lottie options={defaultOptions} height={60} width={60} />
      ) : (
        <button type="submit">Salvar</button>
      )}
      <ToastContainer />
    </form>
  );
}
