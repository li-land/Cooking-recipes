import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="not-found">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__description">Sorry, page not found</p>
        <Link to={"/"} className="btn">
          Go to back
        </Link>
      </div>
    </>
  );
}

export { NotFound };
