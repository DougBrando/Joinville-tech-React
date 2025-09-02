import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <h3>Energia Solar 365</h3>
        <ul>
          <li> CNPJ: 00.000.000/0000-00</li>
          <li> Email: contato@empresa.com.br</li>
          <li> Endereço: Rua Exemplo, 123 - Bairro - Cidade/UF</li>
        </ul>
        <div className="social-media">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="mailto:contato@empresa.com.br">
              <FaEnvelope />
            </a>
            <a href="tel:+5511999999999">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>

      
     
      <p>&copy;2025 Energia Solar 365. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;