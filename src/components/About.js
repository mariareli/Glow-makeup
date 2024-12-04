import React from "react";
import "./About.css";
import aboutImage from "../assets/im13.png"

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Acerca de Glow Makeup</h1>
        <p>
          En Glow Makeup, creemos en realzar la belleza natural de cada persona a través de productos de alta calidad y servicios excepcionales. 
        </p>
      </div>
      <div className="about-content">
        <img src={aboutImage} alt="Sobre nosotros" className="about-image" />
        <div className="about-text">
          <h2>Nuestra Historia</h2>
          <p>
            Glow Makeup nació con el sueño de ofrecer a nuestros clientes no solo productos cosméticos, sino también una experiencia personalizada que los haga sentir únicos. Desde nuestra fundación, hemos trabajado para seleccionar cuidadosamente marcas y productos que reflejen nuestros valores de calidad, sostenibilidad y estilo.
          </p>
          <h2>Nuestros Valores</h2>
          <ul>
            <li>🌟 Calidad Premium: Solo trabajamos con las mejores marcas del mercado.</li>
            <li>🌍 Sostenibilidad: Comprometidos con productos y prácticas eco-amigables.</li>
            <li>💖 Inclusividad: Creemos que la belleza no tiene límites.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
