import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MealsContext } from "../store/context";

const Search = () => {
  const { searchValue, setSearchValue, getSearchIngredients } =
    useContext(MealsContext);
  const { pathname, search } = useLocation();
  let navigate = useNavigate();
  return (
    <div className="search">
      <input
        className="search__field"
        type="search"
        placeholder="Search by main ingredient"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            getSearchIngredients(searchValue);
            navigate({ pathname, search: `?search=${searchValue}` });
          }
        }}
      />
      <button
        className="btn"
        onClick={() => {
          getSearchIngredients(searchValue);
          navigate({ pathname, search: `?search=${searchValue}` });
        }}
      >
        Search
      </button>
    </div>
  );
};
export { Search };
