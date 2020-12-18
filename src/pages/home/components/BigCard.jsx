import React from "react";

export default function BigCard() {
  return (
    <div className="col-lg-5 col-md-6 item">
      <div className="card">
        <div className="card-header p-0 position-relative">
          <a href="blog-single.html">
            <img
              className="card-img-bottom d-block radius-image"
              src="assets/images/b1.jpg"
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body p-0 blog-details">
          <a href="blog-single.html" className="blog-desc">
            How to Create Detailed Buyer Personas for Your Business
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Qui
            eligendi vitae sit.
          </p>
          <div className="author align-items-center mt-3 mb-1">
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
          <a href="blog.html" className="btn btn-style btn-outline mt-4">
            All featured posts
          </a>
        </div>
      </div>
    </div>
  );
}
