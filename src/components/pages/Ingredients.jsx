import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAllIngredients } from "../../api";
import { Preloader } from "../Preloader";
import { IngredientList } from "../IngredientList";
import { Search } from "../Search";
import { MealsContext } from "../../store/context";

function Ingredients() {
  const {
    ingredients,
    getIngredients,
    searchIngredients,
    getSearchIngredients,
  } = useContext(MealsContext);

  let navigate = useNavigate();

  const { search } = useLocation();

  useEffect(() => {
    getAllIngredients().then((data) => {
      getIngredients(data.meals);
      getSearchIngredients(search.split("=")[1].toLowerCase());
    });
  }, []);

  return (
    <>
      <button
        className="btn-back"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go to back
      </button>
      <Search />
      {!ingredients.length ? (
        <Preloader />
      ) : (
        <IngredientList
          ingredients={
            !searchIngredients.length ? ingredients : searchIngredients
          }
        />
      )}
    </>
  );
}

export { Ingredients };
