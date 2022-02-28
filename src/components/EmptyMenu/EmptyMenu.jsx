import { Card, Text, Col, Row, Button, Grid } from "@nextui-org/react";
import { useNavigate } from "react-router";

import image from "../../utils/gold-cutlery-set-on-black-background.jpg";

const EmptyMenu = () => {
  const navigate = useNavigate();
  return (
    <Grid.Container>
      <Grid xs={12} sm={7} css={{ margin: "0 auto" }}>
        <Card cover css={{ w: "100%", p: 0 }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text h3 color="white">
                Parece que no hay platos en el menú
              </Text>
              <Text size={12} weight="bold" transform="uppercase" color="white">
                Ve al buscador para agregar nuevos
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Image
              src={image}
              height={400}
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
            <Row>
              <Col>
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    onClick={() => navigate("/buscador")}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Buscar Recetas
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default EmptyMenu;
