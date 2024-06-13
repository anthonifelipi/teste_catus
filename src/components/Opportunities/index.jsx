import ProductCard from "../ProductCard";
import products from "../../data/products";
import { useState } from "react";
import "./styles.css";
import left from "../../assets/img/left.png";
import right from "../../assets/img/right.png";

const Opportunities = () => {
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 4;

  const handleScroll = (direction) => {
    if (direction === "left") {
      setStartIndex((prevIndex) => Math.max(prevIndex - productsPerPage, 0));
    } else if (direction === "right") {
      setStartIndex((prevIndex) =>
        Math.min(prevIndex + productsPerPage, products.length - productsPerPage)
      );
    }
  };

  const visibleProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <section className="opportunities">
      <h2>Oportunidades para economizar</h2>
      <div className="product-carousel-wrapper">
        <div className="arrow left" onClick={() => handleScroll("left")}>
          <img src={left} alt="Esquerda" />
        </div>
        <div className="product-carousel">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="arrow right" onClick={() => handleScroll("right")}>
          <img src={right} alt="Direita" />
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
