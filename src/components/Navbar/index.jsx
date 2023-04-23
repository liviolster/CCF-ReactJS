import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import  logo  from "../../assets/logo.png"
import { CiShoppingCart } from 'react-icons/ci'


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
      <NavLink to="/sobrenosotros" style={({ isActive }) => (isActive ? activeStyle : undefined)}> <p>Sobre Nosotros</p></NavLink>
      <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyle : undefined)}><CiShoppingCart size={40} /></NavLink>
    </nav>
  )
}

export default Navbar