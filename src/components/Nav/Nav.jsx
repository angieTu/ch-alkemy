import { NavLink } from "react-router-dom";

import Logout from "../Logout/Logout";
import Container from "../primitives/Container";
import "./nav.scss";

const Nav = () => {
  return (
    <Container className="nav-container d-flex bd-highlight">
      <Container className="p-2 w-100 bd-highlight links-container">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/buscador"
        >
          Buscador
        </NavLink>
      </Container>
      <Logout />
    </Container>
  );
};

export default Nav;
