import React from "react";
import tvshowLogo from "./commonResources/images/home/banker.png";
import logo from "./commonResources/images/icons/apple-tv-logo.png";
import watchLogo from "./commonResources/images/icons/watch-series5-logo.png";

export default function AppleTVAndWatchs() {
  return (
    <div>
      <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={logo} alt="Apple TV Logo" />
                  </div>
                </div>

                <div className="tvshow-logo-wraper">
                  <img src={tvshowLogo} alt="TV Show Logo" />
                </div>

                <div className="watch-more-wrapper">
                  <a href="#" role="button">
                    Watch now on the Apple TV App
                  </a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={watchLogo} alt="Watch Series 5 Logo" />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="#" role="button">
                        Learn more
                      </a>
                    </li>
                    <li>
                      <a href="#" role="button">
                        Buy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
