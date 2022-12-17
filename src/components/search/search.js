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
    <section className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Serch for.."
          ref={SearchRef}
          onChange={handleSearch}
        />
        <button>
          <FaSearch />
        </button>
      </form>
    </section>
  );
};

export default Search;
