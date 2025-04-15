import React, { useEffect } from "react";
import $ from "jquery";
import search_icon from "./commonResources/images/icons/search-icon-sm.png";
import cart from "./commonResources/images/icons/cart-sm.png";
import logo_sm from "./commonResources/images/icons/logo-sm.png";

function Header() {
  useEffect(() => {
    $(".navbar-toggler").click(function () {
      $(this).next("ul").slideToggle();
    });
  }, []);

  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="/">
            <img src={logo_sm} alt="Logo" />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/">
                  Mac
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/">
                  iPhone
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/">
                  iPad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/">
                  Watch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/">
                  TV
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/">
                  <img src={search_icon} alt="Search Icon" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/">
                  <img src={cart} alt="Cart Icon" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
