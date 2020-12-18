import React, { useEffect } from "react";
import Recent from "../home/components/Recent";
import AuthorPost from "./components/AuthorPost";

export default function Author() {
  useEffect(() => {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = [
      "I'm Alexander Ronald.",
      "Writing is all my Life.",
      "I Love to write Blog posts!",
    ];
    const typingDelay = 200;
    const erasingDelay = 10;
    const newTextDelay = 100; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(
          charIndex
        );
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        // add class 'typing' if there's none
        if (!cursorSpan.classList.contains("typing")) {
          cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, 0);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay);
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      // On DOM Load initiate the effect
      if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
    return () => {};
  }, []);
  return (
    <>
      <section id="author" className="w3l-author py-5">
        <div className="container py-md-3">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-4 col-7 order-first">
              <div>
                <img
                  src="assets/images/author.jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </div>
            </div>
            <div className="col-md-9 col-sm-12 order-md-first mt-lg-0 mt-4">
              <span className="category">Writing is all my life</span>
              <h1 className="mb-4 title">
                Hello, <span className="typed-text"></span>
                <span className="cursor">&nbsp</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, excepturi. Distinctio accusantium fugit odit? Fugit
                ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur at corporis omnis sapiente deleniti atque ea maxime
                consequatur optio perspiciatis.
              </p>
              <ul className="author-icons mt-4">
                <li>
                  <a className="facebook" href="#url">
                    <span className="fa fa-facebook" aria-hidden="true"></span>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#url">
                    <span className="fa fa-twitter" aria-hidden="true"></span>
                  </a>
                </li>
                <li>
                  <a className="google" href="#url">
                    <span
                      className="fa fa-google-plus"
                      aria-hidden="true"
                    ></span>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#url">
                    <span className="fa fa-linkedin" aria-hidden="true"></span>
                  </a>
                </li>
                <li>
                  <a className="github" href="#url">
                    <span className="fa fa-github" aria-hidden="true"></span>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#url">
                    <span className="fa fa-dribbble" aria-hidden="true"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="w3l-authorblock2 w3l-homeblock1 mb-5 pb-5">
        <div className="container">
          <div className="item mt-4">
            <AuthorPost/>
            <Recent props={false}/>   
            <div className="ad-block text-center mt-5">
              <a href="#url">
                <img
                  src="assets/images/ad.gif"
                  className="img-fluid"
                  alt="ad image"
                />
              </a>
            </div>
            {/* //ad block */}
          </div>
        </div>
        {/* //block*/}
      </div>
    </>
  );
}
