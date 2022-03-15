const BASE_API_URL = "https://www.themealdb.com/api/json/v1/1/";

export const getMealById = async (idMeal) => {
  const response = await fetch(`${BASE_API_URL}lookup.php?i=${idMeal}`);
  return await response.json();
};

export const getAllCategories = async () => {
  const response = await fetch(`${BASE_API_URL}categories.php`);
  return await response.json();
};

export const getFilteredByCategory = async (strCategory) => {
  const response = await fetch(`${BASE_API_URL}filter.php?c=${strCategory}`);
  return await response.json();
};

export const getAllIngredients = async () => {
  const response = await fetch(`${BASE_API_URL}list.php?i=list`);
  return await response.json();
};

export const getFilteredByIngredient = async (strIngredient) => {
  const response = await fetch(`${BASE_API_URL}filter.php?i=${strIngredient}`);
  return await response.json();
};

export const getCountries = async () => {
  const response = await fetch(`${BASE_API_URL}list.php?a=list`);
  return await response.json();
};
export const getFilteredByCountry = async (strArea) => {
  const response = await fetch(`${BASE_API_URL}filter.php?a=${strArea}`);
  return await response.json();
};

export const getRandomMeal = async () => {
  const response = await fetch(`${BASE_API_URL}random.php`);
  return await response.json();
};
