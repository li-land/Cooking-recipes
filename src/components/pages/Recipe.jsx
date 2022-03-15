import { useEffect, useContext } from "react";
import { MealsContext } from "../../store/context";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../../api";
import { Preloader } from "../Preloader";

function Recipe() {
  const { recipe, getRecipe } = useContext(MealsContext);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => getRecipe(data.meals[0]));
  }, [id]);

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
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="page container recipe">
          <div className="recipe__description">
            <div className="recipe__image">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </div>
            <div className="recipe__content">
              <div className="recipe__title">{recipe.strMeal}</div>
              <div className="recipe__category">
                Category: {recipe.strCategory}
              </div>
              {recipe.strArea ? (
                <div className="recipe__country">Country: {recipe.strArea}</div>
              ) : null}
              <div className="recipe__ingredients">
                <table>
                  <thead>
                    <tr>
                      <th>Ingredient</th>
                      <th>Measure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(recipe).map((key) => {
                      if (key.includes("Ingredient") && recipe[key]) {
                        return (
                          <tr key={key}>
                            <td>{recipe[key]}</td>
                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="recipe__instruction-box">
            <h3 className="recipe__instruction-title">Сooking instructions</h3>
            <p className="recipe__instruction">{recipe.strInstructions}</p>
          </div>
          <div className="recipe__video-box">
            {recipe.strYoutube ? (
              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                title={recipe.strMeal}
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
export { Recipe };
