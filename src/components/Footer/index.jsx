import "./styles.css";

// Importa as imagens da pasta assets
import googleSecurity from "../../assets/img/googleSecurity.png";
import protectStore from "../../assets/img/protectStore.png";
import visa from "../../assets/img/visa.png";
import mastercard from "../../assets/img/mastercard.png";
import amex from "../../assets/img/amex.png";
import diners from "../../assets/img/diners.png";
import discover from "../../assets/img/discover.png";
import pix from "../../assets/img/pix.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Central de Atendimento</h3>
          <ul>
            <li>
              <a href="#">Ajuda e suporte</a>
            </li>
            <li>
              <a href="#">Fale conosco</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <p>WhatsApp: (11) 99999-9999</p>
          <p>Nossos horários: Segunda a sexta das 9h às 18h</p>
        </div>
        <div className="footer-section">
          <h3>Selos de Segurança</h3>
          <img src={googleSecurity} alt="Selo de Segurança Google" />
          <img src={protectStore} alt="Selo de Loja Protegida" />
        </div>
        <div className="footer-section">
          <h3>Formas de Pagamento</h3>
          <div className="payment-methods">
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
            <img src={amex} alt="American Express" />
            <img src={discover} alt="Discover" />
            <img src={pix} alt="Pix" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
