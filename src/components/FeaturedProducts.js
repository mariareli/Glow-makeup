import React from "react";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  const products = [
    { id: 1, name: "Saile Rubor Liquido", image: require("../assets/im6.png") },
    { id: 2, name: "Laneige Exfoliante de labios", image: require("../assets/im7.png") },
    { id: 3, name: "Fenty Beauty LipStick", image: require("../assets/im8.png") },
  ];

  return (
    <div className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} /> {/* Corrige aquí */}
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
