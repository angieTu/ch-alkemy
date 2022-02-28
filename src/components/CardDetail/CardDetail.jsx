import { Card, Grid, Text, Col, Row, Button } from "@nextui-org/react";

import { useNavigate } from "react-router";
import { BiTimeFive } from "react-icons/bi";
import { ImPriceTag } from "react-icons/im";
import { MdBarChart } from "react-icons/md";
import { RiPlantLine } from "react-icons/ri";

const CardDetail = ({ image, title, minutes, score, price, vegan }) => {
  const navigate = useNavigate();
  return (
    <Grid.Container>
      <Grid xs={12} sm={7} css={{ margin: "0 auto" }}>
        <Card cover css={{ w: "100%", p: 0 }}>
          <Card.Header
            blur
            css={{ position: "absolute", zIndex: 1, top: 0, bgBlur: "#0f1114" }}
          >
            <Col>
              <Text h3 color="white">
                {title}
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
                <Row justify="space-around" align="center" wrap="wrap">
                  <Text color="white" size={20}>
                    <BiTimeFive /> {minutes} minutes
                  </Text>
                  <Text color="white" size={20}>
                    <MdBarChart /> {score}
                  </Text>
                  <Text color="white" size={20}>
                    <ImPriceTag /> ${price}
                  </Text>
                  <Text color="white" size={20}>
                    <RiPlantLine /> {vegan ? "Si" : "No"}
                  </Text>
                  <Button
                    flat
                    auto
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    onClick={() => navigate(-1)}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Volver
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

export default CardDetail;
