import React, { useContext, useEffect, useState } from "react";
const dataContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSingleLoading, setIsSingleLoading] = useState(false);

  const [drinksList, setDrinksList] = useState([]);
  const [singleDrink, setSingleDrink] = useState({});
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const { drinks } = await res.json();

      setDrinksList(drinks);
      if (!drinks) setDrinksList([]);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchSingleDrink = async (url) => {
    try {
      setIsSingleLoading(true);
      const res = await fetch(url);
      const { drinks } = await res.json();
      let drink = { ...drinks[0] };
      let ingredients = [];
      let index = 1;
      let prop = `strIngredient${index}`;

      while (drink[prop]) {
        ingredients.push(drink[prop]);
        index++;
        prop = `strIngredient${index}`;
      }
      console.log(ingredients);
      setSingleDrink({
        id: drink.idDrink,
        title: drink.strDrink,
        image: drink.strDrinkThumb,
        category: drink.strCategory,
        info: drink.strAlcoholic,
        glass: drink.strGlass,
        instructions: drink.strInstructions,
        ingredients,
      });
      setIsSingleLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <dataContext.Provider
      value={{
        setIsLoading,
        isLoading,
        fetchData,
        drinksList,
        searchTerm,
        setSearchTerm,
        fetchSingleDrink,
        isSingleLoading,
        singleDrink,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(dataContext);
};

export { AppContext, useGlobalContext };
