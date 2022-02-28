import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_KEY from "../../utils/API_KEY";

import Container from "../../components/primitives/Container";
import "./detail.scss";

import { Loading } from "@nextui-org/react";

import CardDetail from "../../components/CardDetail/CardDetail";

const Detail = () => {
  const [recipe, setRecipe] = useState([]);
  const { recipeID } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getRecipe = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`
      );
      setRecipe(response.data);
      setIsLoading(false);
    };
    getRecipe();
  }, [recipeID]);

  return (
    <Container className="detail-container">
      {isLoading ? (
        <Loading
          className="spinner"
          type="points"
          size="xl"
          color="success"
          gradientBackground=""
        />
      ) : (
        <CardDetail
          image={recipe.image}
          title={recipe.title}
          minutes={recipe.readyInMinutes}
          score={recipe.healthScore}
          price={recipe.pricePerServing}
          vegan={recipe.vegan}
        />
      )}
    </Container>
  );
};

export default Detail;
