import { Link } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

export function CategoriesList(props) {
  const { categories = [] } = props;

  return (
    <div className="page">
      <h2 className="page__title">Categories of recipes</h2>
      <div className="page__categories">
        {categories.length ? (
          categories.map((category) => (
            <div key={category.idCategory} className="page__card card">
              <div className="card__item">
                <div className="card__image">
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                  />
                </div>
                <div className="card__content">
                  <div className="card__title">{category.strCategory}</div>
                  <Link
                    to={`/category/${category.strCategory}`}
                    className="btn"
                  >
                    Watch the {category.strCategory} category
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}
