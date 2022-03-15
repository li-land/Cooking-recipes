import { useEffect, useContext } from "react";
import { MealsContext } from "../../store/context";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredByCountry } from "../../api";
import { Preloader } from "../Preloader";
import { MealList } from "../MealList";

function Country() {
  const { countryMeals, getCountryMeals } = useContext(MealsContext);
  const { country } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getFilteredByCountry(country).then((data) => getCountryMeals(data.meals));
  }, [country]);

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
      {!countryMeals.length ? (
        <Preloader />
      ) : (
        <MealList name={country} meals={countryMeals} />
      )}
    </>
  );
}

export { Country };
