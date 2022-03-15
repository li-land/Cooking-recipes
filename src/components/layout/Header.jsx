import { Link } from "react-router-dom";
import logo from "../../icon/logo.png";
import { Navbar } from "../menu/Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={"/"} className="header__logo">
          <img className="header__logo-image" src={logo} alt="" />
          Cooking recipes
        </Link>
        <div className="menu">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
export { Header };
