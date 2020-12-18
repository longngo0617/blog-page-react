import React, { useEffect } from "react";

export default function Footer() {
  
  useEffect(() => {
    // When the user scrolls down 20px from the top of the document, show the button
    window.addEventListener("wheel", scrollFunction);
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("movetop").style.display = "block";
      } else {
        document.getElementById("movetop").style.display = "none";
      }
    }
    return () => {
      window.removeEventListener(scrollFunction);
    };
  }, []);
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer className="w3l-footer-16">
      <div className="footer-content py-lg-5 py-4 text-center">
        <div className="container">
          <div className="copy-right">
            <h6>
              © 2020 Design Blog . Made with{" "}
              <span className="fa fa-heart" aria-hidden="true" />, Designed by{" "}
              <a href="https://w3layouts.com">W3layouts</a>{" "}
            </h6>
          </div>
          <ul className="author-icons mt-4">
            <li>
              <a className="facebook" href="#url">
                <span className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a className="twitter" href="#url">
                <span className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a className="google" href="#url">
                <span className="fa fa-google-plus" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#url">
                <span className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a className="github" href="#url">
                <span className="fa fa-github" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a className="dribbble" href="#url">
                <span className="fa fa-dribbble" aria-hidden="true" />
              </a>
            </li>
          </ul>
          <button onClick={topFunction} id="movetop" title="Go to top">
            <span className="fa fa-angle-up" />
          </button>
        </div>
      </div>
    </footer>
  );
}
