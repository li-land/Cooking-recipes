import React from "react";
import { Link } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

export function IngredientList(props) {
  const { ingredients = [] } = props;

  return (
    <div className="page">
      <h2 className="page__title">All ingredients</h2>
      <div className="page__categories">
        {ingredients.length ? (
          ingredients.map((ingredient) => (
            <Link
              className="link"
              key={ingredient.idIngredient}
              to={`/ingredients/${ingredient.strIngredient}`}
            >
              <div className="page__card card">
                <div className="card__item">
                  <div className="card__content">
                    <div className="card__title">
                      {ingredient.strIngredient}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}
