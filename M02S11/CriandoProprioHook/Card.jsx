import { Link } from "react-router";
import { useGetInstruments } from "../../hook/useGetLocalInstruments";

export default function Card() {
  const { instrumentos, carregando, erro } = useGetInstruments();

  return (
    <main>
      <nav>
        <Link to="/card" className="nav-link">
          Listagem (card)
        </Link>
        <Link to="/" className="nav-link">
          Listagem (tabela)
        </Link>
      </nav>
      <h1>Lista de instrumentos</h1>

      {carregando ? (
        <p>Carregando...</p>
      ) : erro ? (
        <p>Erro ao carregar os dados: {erro.message}</p>
      ) : (
        <div className="cards">
          {instrumentos.map((instrumento) => (
            <div className="card" key={instrumento._id}>
              <h3>{instrumento.nome}</h3>
              <ul>
                <li>
                  <strong>Tipo:</strong> {instrumento.tipo}
                </li>
                <li>
                  <strong>Marca:</strong> {instrumento.marca}
                </li>
                <li>
                  <strong>Voltagem:</strong> {instrumento.voltagem}
                </li>
                <li>
                  <strong>Ano:</strong> {instrumento.ano}
                </li>
                <li>
                  <strong>Preço:</strong> {instrumento.preco}
                </li>
                <li>
                  <strong>Peso (kg):</strong> {instrumento.peso_kg}
                </li>
                <li>
                  <strong>Status:</strong>
                  <strong
                    style={{ color: instrumento.ativo ? "green" : "red" }}
                  >
                    {instrumento.ativo ? "Ativo" : "Inativo"}
                  </strong>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
