import React from "react";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/pages/Home";
import { Category } from "./components/pages/Category";
import { Recipe } from "./components/pages/Recipe";
import { Country } from "./components/pages/Country";
import { NotFound } from "./components/pages/NotFound";
import { Ingredients } from "./components/pages/Ingredients";
import { MealsByIngredient } from "./components/pages/MealsByIngredient";
import { MealsContextProvider } from "./store/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <MealsContextProvider>
            <Header />
            <main className="page">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:name" element={<Category />} />
                <Route path="/country/:country" element={<Country />} />
                <Route path="/ingredients/" element={<Ingredients />} />
                <Route
                  path="/ingredients/:ingredient"
                  element={<MealsByIngredient />}
                />
                <Route path="/meal/:id" element={<Recipe />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </MealsContextProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
