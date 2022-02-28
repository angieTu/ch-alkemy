import { createContext, useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import API_KEY from "../utils/API_KEY";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [newRecipe, setNewRecipe] = useState(null);
  const [recipeID, setRecipeID] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [total, setTotal] = useState(0);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [ingrediente, setIngrediente] = useState("");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("Menu"))) {
      setMenu(JSON.parse(localStorage.getItem("Menu")));
    }
  }, []);

  useEffect(() => {
    const addRecipe = () => {
      if (
        newRecipe !== null &&
        isInMenu(newRecipe.id) === false &&
        menu.length < 4
      ) {
        if (checkMaxVegan(newRecipe)) {
          swal({
            text: "Debe agregar al menos 2 platos veganos.",
          });
        } else {
          setMenu([...menu, newRecipe]);
          localStorage.setItem("Menu", JSON.stringify(menu));
          let a = JSON.parse(localStorage.getItem("Menu"));
          a.push(newRecipe);
          localStorage.setItem("Menu", JSON.stringify(a));
        }
      } else if (
        newRecipe !== null &&
        isInMenu(newRecipe.id) === false &&
        menu.length >= 4
      ) {
        swal({
          text: "El menú ya se encuentra lleno.",
        });
      }
    };
    addRecipe();
  }, [newRecipe]);

  const isVegan = (recipe) => {
    return recipe.vegan;
  };

  const checkMaxVegan = (recipe) => {
    return menu.filter((m) => isVegan(m) === isVegan(recipe)).length >= 2;
  };

  const deleteRecipe = (id) => {
    const newMenu = menu.filter((e) => e.id !== id);
    setMenu([...newMenu]);
    localStorage.setItem("Menu", JSON.stringify(newMenu));
  };

  const isInMenu = (id) => {
    const recipe = menu.find((e) => e.id === id);
    return recipe === undefined ? false : true;
  };

  useEffect(() => {
    const getTotal = () => {
      if (menu.length > 0) {
        const price = menu.map((elem) => elem.pricePerServing);
        let suma = 0;
        for (let i = 0; i < price.length; i++) {
          suma += price[i];
        }
        setTotal(suma.toFixed(2));
      } else {
        setTotal(0);
      }
    };
    getTotal();
  }, [menu]);

  useEffect(() => {
    const getTime = () => {
      if (menu.length > 0) {
        const arrayTime = menu.map((elem) => elem.readyInMinutes);
        let suma = 0;
        for (let i = 0; i < arrayTime.length; i++) {
          suma += arrayTime[i];
        }
        setTime(suma);
      } else {
        setTime(0);
      }
    };
    getTime();
  }, [menu]);

  useEffect(() => {
    const getScore = () => {
      if (menu.length > 0) {
        const arrayScore = menu.map((elem) => elem.healthScore);
        let suma = 0;
        for (let i = 0; i < arrayScore.length; i++) {
          suma += arrayScore[i];
        }
        setScore(suma);
      } else {
        setScore(0);
      }
    };
    getScore();
  }, [menu]);

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`
      );
      setNewRecipe(response.data);
    };
    getDetails();
  }, [recipeID]);

  return (
    <MenuContext.Provider
      value={{
        menu,
        setMenu,
        deleteRecipe,
        isInMenu,
        setRecipeID,
        recipes,
        setRecipes,
        total,
        score,
        time,
        ingrediente,
        setIngrediente,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
