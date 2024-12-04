import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ana López",
      feedback: "Los productos son de excelente calidad, ¡me encantaron!",
    },
    {
      id: 2,
      name: "Carlos Gómez",
      feedback: "El servicio es increíble, muy rápidos y atentos.",
    },
    {
      id: 3,
      name: "María Fernández",
      feedback: "La mejor tienda de maquillaje que he encontrado.",
    },
  ];

  return (
    <div className="testimonials">
      <h2>Testimonios</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-item" key={testimonial.id}>
            <p>"{testimonial.feedback}"</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
