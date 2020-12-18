import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="w3l-header">
      <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="fa fa-pencil-square-o" /> Design Blog
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa icon-expand fa-bars" />
            <span className="fa icon-close fa-times" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown @@category__active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories <span className="fa fa-angle-down" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className="dropdown-item @@ls__active"
                    to="/life-style"
                  >
                    Lifestyle posts
                  </Link>
                  <Link className="dropdown-item @@cp__active" to="/culture">
                    Culture posts
                  </Link>
                  <Link className="dropdown-item @@su__active" to="start-up">
                    Startup posts
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown @@blog__active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog <span className="fa fa-angle-down" />
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown1"
                >
                  <Link className="dropdown-item @@fp__active" to="/blog">
                    Featured posts
                  </Link>
                  <Link
                    className="dropdown-item @@sp__active"
                    to="/blog-single"
                  >
                    Standard single post
                  </Link>
                  <Link className="dropdown-item @@vp__active" to="/single">
                    Video single post
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown @@author__active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More <span className="fa fa-angle-down" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item @@ap__active" to="/author">
                    Author page
                  </Link>
                  <Link
                    className="dropdown-item @@sr__active"
                    to="/search-results"
                  >
                    Search results
                  </Link>
                  <Link className="dropdown-item @@404__active" to="/*">
                    404 page
                  </Link>
                </div>
              </li>
              <li className="nav-item @@contact__active">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/*/search-right*/}
            <div className="search-right mt-lg-0 mt-2">
              <a href="#search" title="search">
                <span className="fa fa-search" aria-hidden="true" />
              </a>
              {/* search popup */}
              <div id="search" className="pop-overlay">
                <div className="popup">
                  <h3 className="hny-title two">Search here</h3>
                  <form
                    action="search-results.html"
                    method="Get"
                    className="search-box"
                  >
                    <input
                      type="search"
                      placeholder="Search for blog posts"
                      name="search"
                      required="required"
                      autoFocus
                    />
                    <button type="submit" className="btn">
                      Search
                    </button>
                  </form>
                  <a className="close" href="#close">
                    ×
                  </a>
                </div>
              </div>
              {/* /search popup */}
            </div>
            {/*//search-right*/}
            <div className="header-author d-flex ml-lg-4 pl-2 mt-lg-0 mt-3">
              <a className="img-circle img-circle-sm" href="author.html">
                <img
                  src="assets/images/author.jpg"
                  className="img-fluid"
                  alt="..."
                />
              </a>
              <div className="align-self ml-3">
                <a href="author.html">
                  <h5>Alexander</h5>
                </a>
                <span>Blog Writer</span>
              </div>
            </div>
          </div>
          {/* toggle switch for light and dark theme */}
          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="mode-container">
                    <i className="gg-sun" />
                    <i className="gg-moon" />
                  </div>
                </label>
              </div>
            </nav>
          </div>
          {/* //toggle switch for light and dark theme */}
        </div>
      </nav>
    </header>
  );
}
