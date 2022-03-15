import {
  GET_CATEGORIES,
  GET_CATEGORY_MEALS,
  GET_INGREDIENTS,
  GET_MEALS_BY_INGREDIENT,
  GET_RANDOM_ID_MEAL,
  GET_COUNTRIES,
  GET_COUNTRY_MEALS,
  GET_RECIPE,
  SET_SEARCH_VALUE,
  GET_SEARCH_INGREDIENT,
} from "./context";

export function reducer(state, { type, payload }) {
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload || [],
      };
    case GET_CATEGORY_MEALS:
      return {
        ...state,
        categoryMeals: payload || [],
      };
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: payload || [],
      };
    case GET_MEALS_BY_INGREDIENT:
      return {
        ...state,
        mealsByIngredient: payload || [],
      };
    case GET_RANDOM_ID_MEAL:
      return {
        ...state,
        randomId: payload || "",
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload || [],
      };
    case GET_COUNTRY_MEALS:
      return {
        ...state,
        countryMeals: payload || [],
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: payload || {},
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: payload || "",
      };
    case GET_SEARCH_INGREDIENT:
      let filteredIngredients = state.ingredients.filter((ingredient) =>
        ingredient.strIngredient
          .toLowerCase()
          .includes(payload.value.toString().toLowerCase())
      );
      return {
        ...state,
        searchIngredients: filteredIngredients,
      };
    default:
      return state;
  }
}
