import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SubMenuItems } from "./SubMenuItems";
import { getRandomMeal, getCountries, getAllCategories } from "../../api";
import { MealsContext } from "../../store/context";

const Navbar = () => {
  const {
    categories,
    setCategories,
    randomId,
    getRandomIdMeal,
    countries,
    setCountries,
  } = useContext(MealsContext);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data.categories));
  }, []);

  useEffect(() => {
    getRandomMeal().then((data) => getRandomIdMeal(data.meals[0].idMeal));
  }, [randomId]);

  useEffect(() => {
    getCountries().then((data) => setCountries(data.meals));
  }, []);

  return (
    <nav className="menu__wrapper">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to={"/"} className="menu__link">
            Categories
          </Link>
          <SubMenuItems data={categories} />
        </li>
        <li className="menu__item">
          <span className="menu__link" href="#">
            Country
          </span>
          <SubMenuItems data={countries} />
        </li>
        <li className="menu__item">
          <Link to={"/ingredients/"} className="menu__link">
            All ingredients
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to={`/meal/${randomId}`}
            className="menu__link menu__link--outline"
          >
            Random recipte
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
