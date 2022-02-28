import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Loading } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import Container from "../../components/primitives/Container";
import Img from "../../components/primitives/Img";
import Form from "../../components/primitives/Form";
import Label from "../../components/primitives/Label";
import Input from "../../components/primitives/Input";

import { AuthContext } from "../../contexts/AuthContext";
import "./login.scss";
import image from "../../utils/wepik-202218-164831.jpg";

const Login = () => {
  const navigate = useNavigate();

  const { setUsuario, setIsLogged } = useContext(AuthContext);
  const [datos, setDatos] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const createPost = async () => {
    setIsLoading(true);
    await axios
      .post(`http://challenge-react.alkemy.org/`, {
        email: datos.email,
        password: datos.password,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("Token", response.data.token);
          navigate("/");
          setUsuario(datos);
          setIsLogged(true);
          setIsLoading(false);
          swal("Bienvenido!", {
            icon: "success",
            buttons: false,
            timer: 1000,
          });
        }
      })
      .catch(() => {
        swal("Oh, no!", "Algunos de los datos son incorrectos", "error");
        setIsLogged(false);
        setIsLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className="login-container">
      <Img src={image} alt="" />{" "}
      {isLoading ? (
        <Loading type="points" size="xl" color="success" className="spinner" />
      ) : (
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Container>
            <Label>E-mail</Label>
            <Input type="email" name="email" onChange={handleInputChange} />
          </Container>
          <Container>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </Container>
          <Button
            shadow
            color="success"
            auto
            type="submit"
            onClick={createPost}
          >
            INICIAR
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Login;
