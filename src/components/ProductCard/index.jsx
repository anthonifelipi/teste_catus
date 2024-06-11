import "./styles.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-original-price">{product.originalPrice}</p>
      <p className="product-price">R$ {product.price}</p>
      <p className="product-installments">{product.installments}</p>
      <button className="add-to-cart-button">Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;
