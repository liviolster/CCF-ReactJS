import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
  const activeStyle = {
    color: "#5B7E73",
  };
  return (
    <NavLink
        to="/cart"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <CiShoppingCart size={40} />
      </NavLink>
  )
}

export default CartWidget