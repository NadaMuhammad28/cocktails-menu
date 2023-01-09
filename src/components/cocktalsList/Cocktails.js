import { useEffect } from "react";
import { useGlobalContext } from "../../services/context";
import Loading from "../loading/loading";
import SingleDrink from "./SingleDrink";
import "./cocktails.css";
import Search from "../search/search";
import NoMatch from "../search/noMatches";
const CocktailsList = () => {
  const { isLoading, setIsLoading, fetchData, drinksList, searchTerm } =
    useGlobalContext();
  useEffect(() => {
    fetchData();
  }, [searchTerm]);
  // if (drinksList.length === 0) {
  //   return <NoMatch />;
  // }
  return (
    <section className=" ">
      <div className=" width-container">
        {isLoading && <Loading />}
        {drinksList.length === 0 && <NoMatch />}

        <h1>Cocktails</h1>
        <div className="mt-4">
          <div className="row gx-5 ">
            {drinksList &&
              drinksList.map((drink) => {
                return (
                  <SingleDrink
                    key={drink.idDrink}
                    {...{
                      id: drink.idDrink,
                      title: drink.strDrink,
                      image: drink.strDrinkThumb,
                      glass: drink.strGlass,
                      type: drink.strAlcoholic,
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CocktailsList;
