import { useState } from 'react'

export default function App(){


  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');

  return(

    <main>
      <h1>Painel de Gerenciamento</h1>
      <h2>No momento 14 post cadastrados</h2>

      <form>
      <h3> Novo post </h3>
        <label>Titulo</label>
        <input type="text" placeholder="Digite o titulo do post"/>

        <label>Conteudo</label>
        <textarea placeholder="Digite o conteudo do post"></textarea>

        <label>Url da imagem da capa</label>
        <input type="text" placeholder="Digite a url da imagem da capa"/>

        <label>Data de Publicação</label>
        <input type="date"/>

      </form>
    </main>

  );
}
