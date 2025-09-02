import './Produtos.css'

function Produtos() {
  return(
    <section id="produtos">
      <h2>Produtos</h2>
      <div className="cards">
      <div className="card">
        <img src="https://criteriaenergia.com.br/wp-content/uploads/2024/01/Placa-solar-3-40-kwp-kit-10-placas-energia-solar-residencial-1024x1024.jpg" />
        <h3> Placa Solar</h3>
        <p>Placa solar de alta eficiência para sua casa ou empresa.</p>
      </div>
      <div className="card">
        <img src="https://minhacasasolar.fbitsstatic.net/img/p/kit-solar-completo-off-grid-de-2220w-com-bateria-de-litio-82008/268482-1.jpg?w=400&h=400&v=no-value" />
        <h3>Kit Solar Completo</h3>
        <p>Kit solar completo com inversor e painel solar.</p>
        </div>

        <div className="card">
          <img src="https://lojasafubra.vtexassets.com/arquivos/ids/186114-800-auto?v=638757464717500000&width=800&height=auto&aspect=true" />
          <h3>Inversor Solar</h3>
          <p>Inversor solar de alta eficiência para sua casa ou empresa.</p>
          </div>
      </div>
    </section>
  )

}
export default Produtos;
