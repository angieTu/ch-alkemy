import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Loading, Grid, Input, Button } from "@nextui-org/react";

import API_KEY from "../../utils/API_KEY";
import Container from "../../components/primitives/Container";
import CardRecipe from "../../components/CardRecipe/CardRecipe";
import { MenuContext } from "../../contexts/MenuContext";
import "./buscador.scss";

const Buscador = () => {
  // const [ingrediente, setIngrediente] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { recipes, setRecipes, ingrediente, setIngrediente } =
    useContext(MenuContext);

  useEffect(() => {
    setIsLoading(true);
    const getRecipes = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${ingrediente}`
      );
      setRecipes(response.data.results);
      setIsLoading(false);
    };
    getRecipes();
  }, [ingrediente]);

  const SignupSchema = Yup.object().shape({
    ingrediente: Yup.string()
      .min(2, "Debe ingresar al menos 2 caracteres.")
      .required("Ingrese un ingrediente."),
  });
  <Grid>
    <Input bordered labelPlaceholder="Success" color="success" />
  </Grid>;

  return (
    <Container className="container buscador-container">
      {isLoading ? (
        <Loading
          type="points"
          size="xl"
          color="success"
          className="spinner"
          gradientBackground=""
        />
      ) : (
        <Container>
          <Formik
            initialValues={{
              ingrediente: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              setIngrediente(values.ingrediente);
            }}
          >
            {({ errors, touched }) => (
              <Container className="form-container">
                {errors.ingrediente && touched.ingrediente ? (
                  <Container>{errors.ingrediente}</Container>
                ) : (
                  <Container>Ingrese el ingrediente a buscar</Container>
                )}
                <Form>
                  <Field name="ingrediente" />{" "}
                  <Button type="submit" color="success" auto ghost>
                    Buscar
                  </Button>
                </Form>{" "}
              </Container>
            )}
          </Formik>

          <Grid.Container gap={2}>
            {recipes &&
              ingrediente !== "" &&
              recipes.map((e) => (
                <CardRecipe
                  id={e.id}
                  key={e.id}
                  title={e.title}
                  image={e.image}
                  page="search"
                />
              ))}
          </Grid.Container>
        </Container>
      )}
    </Container>
  );
};

export default Buscador;
