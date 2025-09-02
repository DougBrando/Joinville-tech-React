import './Orcamento.css'

function Orcamento() {
  return(
    <section id="contato">
      <h2>Solicite um orçamento</h2>
      <p>Entre em contato conosco para solicitar um orçamento personalizado.</p>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required />
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" required></textarea>
        <label htmlFor="produto">Produto de interesse:</label>
        <select id="produto" name="produto" required>

          <option value="placa-solar">Placa Solar</option>
          <option value="kit-solar">Kit Solar</option>
          <option value="inversor-solar">Inversor Solar</option>
          </select>
        <button type="submit">Enviar</button>
        </form>
      </section>
  )
  
}

export default Orcamento;