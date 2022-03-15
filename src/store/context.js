import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const MealsContext = createContext();

const initValue = {
  categories: [],
  categoryMeals: [],
  randomId: "",
  countries: [],
  countryMeals: [],
  recipe: {},
  searchValue: "",
  mealsByIngredient: [],
  ingredients: [],
  searchIngredients: [],
};
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_MEALS = "GET_CATEGORY_MEALS";
export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_MEALS_BY_INGREDIENT = "GET_MEALS_BY_INGREDIENT";
export const GET_RANDOM_ID_MEAL = "GET_RANDOM_ID_MEAL";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_MEALS = "GET_COUNTRY_MEALS";
export const GET_RECIPE = "GET_RECIPE";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const GET_SEARCH_INGREDIENT = "GET_SEARCH_INGREDIENT";

export const MealsContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initValue);

  value.setCategories = (data) => {
    dispatch({ type: GET_CATEGORIES, payload: data });
  };
  value.getCategoryMeals = (data) => {
    dispatch({ type: GET_CATEGORY_MEALS, payload: data });
  };
  value.getIngredients = (data) => {
    dispatch({ type: GET_INGREDIENTS, payload: data });
  };
  value.getMealsByIngredient = (data) => {
    dispatch({ type: GET_MEALS_BY_INGREDIENT, payload: data });
  };

  value.getRandomIdMeal = (data) => {
    dispatch({ type: GET_RANDOM_ID_MEAL, payload: data });
  };

  value.setCountries = (data) => {
    dispatch({ type: GET_COUNTRIES, payload: data });
  };
  value.getCountryMeals = (data) => {
    dispatch({ type: GET_COUNTRY_MEALS, payload: data });
  };

  value.getRecipe = (data) => {
    dispatch({ type: GET_RECIPE, payload: data });
  };
  value.setSearchValue = (value) => {
    dispatch({ type: SET_SEARCH_VALUE, payload: value });
  };
  value.getSearchIngredients = (value) => {
    dispatch({
      type: GET_SEARCH_INGREDIENT,
      payload: { value: value },
    });
  };

  return (
    <MealsContext.Provider value={value}>{children}</MealsContext.Provider>
  );
};
