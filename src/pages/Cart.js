import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const promoCodes = {
    DESCUENTO10: 10,
    DESCUENTO20: 20,
    PERCENT15: 0.15,
  };

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const applyPromoCode = () => {
    if (promoCode in promoCodes) {
      if (promoCode.startsWith("PERCENT")) {
        const percentage = promoCodes[promoCode];
        setDiscount(total * percentage);
      } else {
        setDiscount(promoCodes[promoCode]);
      }
      alert("Código de promoción aplicado!");
    } else {
      alert("Código de promoción inválido.");
      setDiscount(0);
    }
  };

  const handlePayment = () => {
    alert("Pago realizado con éxito. ¡Gracias por tu compra!");
    clearCart(); // Vacía el carrito después del pago
  };

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <input
              type="text"
              placeholder="Código de promoción"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={applyPromoCode}>Aplicar</button>
            <h3>Subtotal: ${total.toFixed(2)}</h3>
            <h3>Descuento: -${discount.toFixed(2)}</h3>
            <h3>Total: ${(total - discount).toFixed(2)}</h3> {/* Corregido */}
            <button onClick={handlePayment}>Pagar</button>
            <button onClick={clearCart}>Vaciar Carrito</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

