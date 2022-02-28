import Container from "../primitives/Container";
import List from "../primitives/List";
import ItemList from "../primitives/ItemList";
import Span from "../primitives/Span";
import Link from "../primitives/Link";

import "./footer.scss";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const yearCopyright = new Date().getFullYear();

  return (
    <>
      <Container as="footer" className="footer">
        <List className="footer-list">
          <Link
            href="https://github.com/angieTu"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="icon-github" /> /angieTu
          </Link>
          <Link
            href="https://www.linkedin.com/in/angie-tu/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="icon-linkedin" /> /angie-tu
          </Link>
        </List>
        <Span> © {yearCopyright} - Todos los derechos reservados </Span>
      </Container>
    </>
  );
};

export default Footer;
