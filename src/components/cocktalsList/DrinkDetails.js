import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../services/context";
import Loading from "../loading/loading";
const DrinkDetails = () => {
  const { id } = useParams();
  const { fetchSingleDrink, singleDrink, isSingleLoading } = useGlobalContext();
  let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  useEffect(() => {
    fetchSingleDrink(url);
  }, []);
  if (isSingleLoading) return <Loading />;
  return (
    <section className="section cocktail-section">
      {singleDrink && (
        <div>
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
          <h2 className="section-title">{singleDrink.title}</h2>
          <div className="drink">
            <img src={singleDrink.image} />
            <div className="drink-info">
              <p>
                <span className="drink-data">name :</span> {singleDrink.title}{" "}
              </p>
              <p>
                <span className="drink-data">category :</span>{" "}
                {singleDrink.category}
              </p>
              <p>
                <span className="drink-data">info :</span> {singleDrink.info}
              </p>
              <p>
                <span className="drink-data">glass :</span> {singleDrink.glass}
              </p>
              <p>
                <span className="drink-data">instructons :</span>{" "}
                {singleDrink.instructions}
              </p>
              <p>
                <span className="drink-data">ingredients :</span>
                {singleDrink.ingredients &&
                  singleDrink.ingredients.map((ingr, index) => {
                    return <span>{ingr}</span>;
                  })}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>

    // <section className="section cocktail-section">
    //   {isSingleLoading && <Loading />}
    //   {singleDrink && (
    //     <>
    //       <Link to="/" className="btn btn-primary">
    //         back home
    //       </Link>
    //       <h2 className="section-title">{singleDrink.title}</h2>
    //       <div className="drink">
    //         <img src={singleDrink.image} alt={singleDrink.title}></img>
    //         <div className="drink-info">
    //           <p>
    //             <span className="drink-data">name :</span> {singleDrink.title}
    //           </p>
    //           <p>
    //             <span className="drink-data">category :</span>{" "}
    //             {singleDrink.category}
    //           </p>
    //           <p>
    //             <span className="drink-data">info :</span> {singleDrink.info}
    //           </p>
    //           <p>
    //             <span className="drink-data">glass :</span> {singleDrink.glass}
    //           </p>
    //           <p>
    //             <span className="drink-data">instructons :</span>{" "}
    //             {singleDrink.instructions}
    //           </p>
    //           <p>
    //             <span className="drink-data">ingredients :</span>
    //             {singleDrink.ingredients.map((item, index) => {
    //               <span key={index}> {item}</span>;
    //             })}
    //           </p>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </section>
  );
};

export default DrinkDetails;
