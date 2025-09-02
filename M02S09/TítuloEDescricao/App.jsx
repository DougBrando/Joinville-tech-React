import { useState } from 'react'
import './App.css'

export default function App(){

  const [posts, setPosts] = useState('');
  const [titulo, setTitulo] = useState('');

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

      </form>
    </main>

  );
}
