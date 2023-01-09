import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../services/context";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const SearchRef = useRef(null);
  useEffect(() => {
    SearchRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = () => {
    setSearchTerm(SearchRef.current.value);
  };
  return (
    <div className=" width-container search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Serch for.."
          ref={SearchRef}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default Search;
