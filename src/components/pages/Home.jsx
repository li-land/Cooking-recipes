import { useContext } from "react";
import { MealsContext } from "../../store/context";
import { Preloader } from "../Preloader";
import { CategoriesList } from "../CategoriesList";

function Home() {
  const { categories } = useContext(MealsContext);
  return (
    <>
      {!categories.length ? (
        <Preloader />
      ) : (
        <CategoriesList categories={categories} />
      )}
    </>
  );
}

export { Home };
