import { useEffect, useContext } from "react";
import { MealsContext } from "../../store/context";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredByCategory } from "../../api";
import { Preloader } from "../Preloader";
import { MealList } from "../MealList";

function Category() {
  const { categoryMeals, getCategoryMeals } = useContext(MealsContext);
  const { name } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getFilteredByCategory(name).then((data) => getCategoryMeals(data.meals));
  }, [name]);

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
      {!categoryMeals.length ? (
        <Preloader />
      ) : (
        <MealList name={name} meals={categoryMeals} />
      )}
    </>
  );
}

export { Category };
