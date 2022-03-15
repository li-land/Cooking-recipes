import { Meal } from "./Meal";
import { NotFound } from "./pages/NotFound";

export function MealList(props) {
  const { name, meals = [] } = props;

  return (
    <div className="page">
      <h2 className="page__title">{name} meals</h2>
      <div className="page__categories">
        {meals.length ? (
          meals.map((meal) => (
            <Meal
              key={meal.idMeal ? meal.idMeal : meal.idIngredient}
              {...meal}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}
