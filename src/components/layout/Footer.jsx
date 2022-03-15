import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__copyright">
          Copyright @2019 - {new Date().getFullYear()}
        </div>
        <div className="footer__adress">www.cookingrecipte.com</div>
      </footer>
    );
  }
}
export { Footer };
