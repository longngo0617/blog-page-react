import React from "react";

export default function Banner() {
  return (
    <div className="item mt-5 pt-4">
      <div className="row">
        <div className="col-lg-6">
          <a href="blog-single.html">
            <img
              className="card-img-bottom d-block radius-image"
              src="assets/images/p3.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="col-lg-6 blog-details align-self mt-lg-0 mt-sm-5 mt-4">
          <a href="blog-single.html" className="blog-desc-big">
            Your Blog Posts are Boring: 9 Tips for Making your Writing more
            Interesting
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            blanditiis, odit non asperiores possimus voluptas sit nihil nam id
            explicabo saepe sapiente excepturi similique, dicta officia odio
            natus nemo. Ratione ipsa distinctio explicabo esse quod autem
            veritatis, in fugit odio.
          </p>
          <div className="author align-items-center mt-4 mb-1">
            <a href="author.html">Johnson smith</a> in <a href="#url">Design</a>
          </div>
          <ul className="blog-meta">
            <li className="meta-item blog-lesson">
              <span className="meta-value"> April 13, 2020 </span>
            </li>
            <li className="meta-item blog-students">
              <span className="meta-value"> 6min read</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
