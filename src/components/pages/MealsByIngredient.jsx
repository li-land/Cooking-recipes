import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredByIngredient } from "../../api";
import { Preloader } from "../Preloader";
import { MealList } from "../MealList";
import { MealsContext } from "../../store/context";

function MealsByIngredient() {
  const { mealsByIngredient, getMealsByIngredient } = useContext(MealsContext);
  const { ingredient } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getFilteredByIngredient(ingredient).then((data) =>
      getMealsByIngredient(data.meals)
    );
  }, [ingredient]);

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
      {!mealsByIngredient.length ? (
        <Preloader />
      ) : (
        <MealList name={ingredient} meals={mealsByIngredient} />
      )}
    </>
  );
}

export { MealsByIngredient };
