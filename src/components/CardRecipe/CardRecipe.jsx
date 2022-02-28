import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Card, Grid, Col, Text, Row, Button } from "@nextui-org/react";

import { BsCheckLg } from "react-icons/bs";
import { RiPlantLine } from "react-icons/ri";

import { MenuContext } from "../../contexts/MenuContext";
import "./cardRecipe.scss";

const CardRecipe = ({ id, title, image, page, vegan }) => {
  const navigate = useNavigate();

  const { deleteRecipe, setRecipeID, isInMenu } = useContext(MenuContext);

  const handleClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const styles = page === "home" ? "sm={12} md={5}" : "xs={6} sm={3}";
  return (
    <Grid css={{ margin: "0 auto", styles }}>
      <Card cover css={{ w: "100%", p: 0 }}>
        <Card.Header
          blur
          css={{
            position: "absolute",
            bgBlur: "#0f1114",
            borderTop: "$borderWeights$light solid $gray700",
            zIndex: 1,
            height: "70px",
          }}
        >
          <Col>
            <Text weight="bold" size={14} transform="uppercase" color="white">
              {title}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body>
          <Card.Image
            src={image}
            height={300}
            width="100%"
            alt="Relaxing app background"
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: "absolute",
            bgBlur: "#0f1114",
            borderTop: "$borderWeights$light solid $gray700",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row justify="space-around">
            {page === "search" ? (
              isInMenu(id) ? (
                <Button
                  disabled
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  onClick={() => {
                    setRecipeID(id);
                  }}
                >
                  <BsCheckLg />
                </Button>
              ) : (
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  onClick={() => {
                    setRecipeID(id);
                  }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Agregar
                  </Text>
                </Button>
              )
            ) : (
              <>
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    onClick={() => deleteRecipe(id)}
                  >
                    Eliminar
                  </Text>
                </Button>
                <Button disabled flat auto rounded className="vegan-container">
                  <RiPlantLine /> {vegan ? "SI" : "NO"}
                </Button>
              </>
            )}

            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
              onClick={() => handleClick(id)}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Ver Detalles
              </Text>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default CardRecipe;
