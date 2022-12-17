import logo from "./logo.svg";
import "./App.css";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/sharedLayout";

//pages
import CocktailsList from "./components/cocktalsList/Cocktails";
import Error from "./pages/Error";
import Home from "./pages/home";
import DrinkDetails from "./components/cocktalsList/DrinkDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="cocktails/:id" element={<DrinkDetails />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
