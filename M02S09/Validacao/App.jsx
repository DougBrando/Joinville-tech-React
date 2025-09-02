import { useState } from "react";
import "./M02S09.css";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const [tipo, setTipo] = useState("");

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
      toast.success("Post salvo com sucesso");
    }
  }

  return (
    <main>
      <h1>Painel de Gerenciamento</h1>
      <h2>No momento 14 post cadastrados</h2>

      <form onSubmit={salvarPost}>
        <h3> Novo post </h3>
        <label>Titulo</label>
        <input
          type="text"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />

        <label>Conteudo</label>
        <textarea
          value={conteudo}
          onChange={(event) => setConteudo(event.target.value)}
        />

        <label>Url</label>
        <input
          type="text"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />

        <label>Data</label>
        <input
          type="date"
          value={data}
          onChange={(event) => setData(event.target.value)}
        />
        <label>Tipo</label>
        <select value={tipo} onChange={(event) => setTipo(event.target.value)}>
          <option value="">Selecione</option>
          <option value="noticia">Noticia</option>
          <option value="artigo">Artigo</option>
          <option value="video">Video</option>{" "}
          <option value="entrevista">Entrevista</option>
        </select>

        <button type="submit">Salvar</button>
      </form>
      <ToastContainer />
    </main>
  );
}
