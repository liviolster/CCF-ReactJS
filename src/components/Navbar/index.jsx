import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import  logo  from "../../assets/logo.png"
import CartWidget from "../CartWidget";

const Navbar = () => {
  const activeStyle = {
    color: "#5B7E73",
  };

  return (
    <nav className={styles.container}>
            <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <img src={logo} alt="logo" className={styles.logo} />
      </NavLink>
      <NavLink to="/category/coffee" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Café</NavLink>
      <NavLink to="/category/chocolate" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Chocolate</NavLink>
      <NavLink
        to="/sobrenosotros"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Sobre Nosotros</p>
      </NavLink>
      <CartWidget />
    </nav>
  )
}

export default Navbar