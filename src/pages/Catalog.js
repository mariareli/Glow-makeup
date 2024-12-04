import React from "react";
import "./Catalog.css";
import { useCart } from "../context/CartContext";

function Catalog() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Sombra de Ojos ", description: "Urban Decay. con colores vibrantes y con mucha pigmentación.", image: require("../assets/im1.png"), price: 20 },
    { id: 2, name: "Polvo conpacto", description: "Con una duracion de hast 16 horas y con acabado mate.", image: require("../assets/im2.png"), price: 15 },
    { id: 3, name: "Base Haus Labs", description: "Con gran variedad para muchos tonos de piel y acabado ligero.", image: require("../assets/im3.png"), price: 30 },
    { id: 4, name: "Blush PT", description: "Con rubor en crema y en polvo para que se selle y te dure todo el día.", image: require("../assets/im4.png"), price: 25 },
    { id: 5, name: "One Size Fijador", description: "Perfecto para un Glam Look y que tu maquillaje te dure todo el día.", image: require("../assets/im5.png"), price: 10 },
  ];

  return (
    <div className="catalog">
      <h1>Catálogo de Productos</h1>
      <div className="catalog-grid">
        {products.map((product) => (
          <div className="catalog-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
