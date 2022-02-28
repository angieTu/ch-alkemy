import { useContext, useEffect, useState } from "react";
import { Loading } from "@nextui-org/react";

import Container from "../../components/primitives/Container";
import Heading from "../../components/primitives/Heading";
import List from "../../components/primitives/List";
import ItemList from "../../components/primitives/ItemList";

import { MenuContext } from "../../contexts/MenuContext";
import CardRecipe from "../../components/CardRecipe/CardRecipe";
import "./home.scss";

import { BiTimeFive } from "react-icons/bi";
import { ImPriceTag } from "react-icons/im";
import { MdBarChart } from "react-icons/md";

import { Grid } from "@nextui-org/react";
import EmptyMenu from "../../components/EmptyMenu/EmptyMenu";

const Home = () => {
  const { menu, total, score, time } = useContext(MenuContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    menu ? setIsLoading(false) : setIsLoading(true);
  }, [menu]);

  return (
    <Container className="home-container">
      {isLoading ? (
        <Loading
          type="points"
          size="xl"
          color="success"
          className="spinner"
          gradientBackground=""
        />
      ) : menu.length === 0 ? (
        <Container className="empty-container">
          {" "}
          <EmptyMenu />{" "}
        </Container>
      ) : (
        <Container>
          <Heading>Platos seleccionados</Heading>
          <Container className="menu-container">
            {menu.length > 0 && (
              <Container className="details-menu">
                <Heading level="3">Total menú:</Heading>
                <List>
                  <ItemList>
                    <ImPriceTag /> ${total}
                  </ItemList>
                  <ItemList>
                    <MdBarChart /> {score}{" "}
                  </ItemList>
                  <ItemList>
                    <BiTimeFive /> {time} minutes
                  </ItemList>
                </List>
              </Container>
            )}
            <Grid.Container gap={2}>
              {menu &&
                menu.map((e) => (
                  <CardRecipe
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    image={e.image}
                    page="home"
                    vegan={e.vegan}
                  />
                ))}
            </Grid.Container>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Home;
