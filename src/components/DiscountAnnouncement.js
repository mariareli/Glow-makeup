import React from "react";
import "./DiscountAnnouncement.css";

function DiscountAnnouncement() {
  const promoCodes = [
    { code: "DESCUENTO10", description: "Obtén $10 de descuento en tu compra" },
    { code: "DESCUENTO20", description: "Obtén $20 de descuento en pedidos mayores a $100" },
    { code: "PERCENT15", description: "15% de descuento en toda la tienda" },
  ];

  return (
    <div className="discount-announcement">
      <h2>¡Aprovecha nuestras promociones!</h2>
      <ul>
        {promoCodes.map((promo, index) => (
          <li key={index}>
            <strong>{promo.code}:</strong> {promo.description}
          </li>
        ))}
      </ul>
      <p>¡Usa estos códigos al pagar para obtener grandes descuentos!</p>
    </div>
  );
}

export default DiscountAnnouncement;
