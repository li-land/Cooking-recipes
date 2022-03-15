import { Link } from "react-router-dom";

const SubMenuItems = (props) => {
  const { data } = props;
  return (
    <ul className="menu__sublist">
      {data[0] && data[0].hasOwnProperty("idCategory")
        ? data.map((category) => {
            return (
              <li key={category.idCategory} className="menu__item">
                <Link
                  to={`/category/${category.strCategory}`}
                  className="menu__link menu__link--sublink"
                >
                  {category.strCategory}
                </Link>
              </li>
            );
          })
        : data.map((country) => {
            return (
              <li key={country.strArea} className="menu__item">
                <Link
                  to={`/country/${country.strArea}`}
                  className="menu__link menu__link--sublink"
                >
                  {country.strArea}
                </Link>
              </li>
            );
          })}
    </ul>
  );
};

export { SubMenuItems };
