import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const links = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/contact",
    title: "Contact"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/users",
    title: "Users"
  }
];
function Navbar() {
  // const activeStyle = {
  //   color: "red",
  //   textDecoration: "none"
  // };
  // const defaultStyle = {
  //   color: "black",
  //   textDecoration: "none"
  // };
  return (
    <div>
      {links.map((link) => (
        <NavLink
          // style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          key={link.path}
          to={link.path}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}
export default Navbar;
