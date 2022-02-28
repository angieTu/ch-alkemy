import { useContext } from "react";
import { Button } from "@nextui-org/react";

import { AuthContext } from "../../contexts/AuthContext";

import Container from "../primitives/Container";

const Logout = () => {
  const { setIsLogged } = useContext(AuthContext);

  const handleLoggingOut = () => {
    setIsLogged(false);
    localStorage.removeItem("Token");
  };
  return (
    <Container className="p-2 flex-shrink-1 bd-highlight">
      <Button shadow color="success" auto size="sm" onClick={handleLoggingOut}>
        Log Out
      </Button>
    </Container>
  );
};

export default Logout;
