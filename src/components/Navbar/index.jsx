import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { CiShoppingCart } from "react-icons/ci";
import  logo  from "../../assets/logo.png"

const Navbar = () => {
  const activeStyle = {
    color: "#5B7E73",
  };

  return (
    <nav className={styles.container}>
            <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <img src={logo} alt="logo" className={styles.logo} />
      </NavLink>
      <NavLink
        to="/productos"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Productos</p>
      </NavLink>
      <NavLink
        to="/ingresar"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Ingresar</p>
      </NavLink>
      <NavLink
        to="/sobrenosotros"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Sobre Nosotros</p>
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <CiShoppingCart size={40} />
      </NavLink>
    </nav>
  )
}

export default Navbar