import { Link } from "react-router-dom";

export function Meal(props) {
  const { idMeal, strMeal, strMealThumb } = props;

  return (
    <div className="page__card card">
      <div className="card__item">
        <div className="card__image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card__content">
          <div className="card__title">{strMeal}</div>
          <Link to={`/meal/${idMeal}`} className="btn">
            Watch the recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
