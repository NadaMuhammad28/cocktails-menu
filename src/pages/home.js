import Search from "../components/search/search";
import CocktailsList from "../components/cocktalsList/Cocktails";
const Home = () => {
  return (
    <>
      <Search className="srch-comp" />

      <CocktailsList />
    </>
  );
};

export default Home;
