import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Nav.css";
import CartIcon from "../../assets/icons/CartIcon";
import CloseIcon from "../../assets/icons/CloseIcon";

const CartNav = ({ cart, onRemoveFromCart }) => {
  const [isCartVisible, setCartVisible] = useState(false);

  const renderOpenButton = () => (
    <button className="nav__cart-btn  nav__cart-btn--open">
      <CartIcon className="nav-icon cart-icon" />
      {cart !== null ? (
        <span className="nav__cart-total">{cart.total_items}</span>
      ) : (
        ""
      )}
    </button>
  );

  const renderCloseButton = () => (
    <button className="nav__cart-btn  nav__cart-btn--close">
      <CloseIcon className="nav-icon close-icon" />
      {cart !== null ? <span className="nav__cart-total"></span> : ""}
    </button>
  );

  return (
    <nav className="nav">
      <div className="logo">E-Commerce</div>
      <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
        {!isCartVisible ? renderOpenButton() : renderCloseButton()}
      </div>
      {isCartVisible && (
        <Cart cart={cart} onRemoveFromCart={onRemoveFromCart} />
      )}
    </nav>
  );
};

export default CartNav;
