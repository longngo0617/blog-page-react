import React from "react";

export default function Card({
  img,
  desc,
  details,
  author,
  day,
  readers,
}) {
  return (
    <div className="card">
      <div className="card-header p-0 position-relative">
        <a href="#blog-single">
          <img
            className="card-img-bottom d-block radius-image"
            src={img}
            alt="Card image cap"
          />
        </a>
      </div>
      <div className="card-body p-0 blog-details">
        <a href="#blog-single" className="blog-desc">
          {desc}
        </a>
        <p>{details}</p>
        <div className="author align-items-center mt-3 mb-1">
          <a href="#author">{author}</a> in <a href="#url">Design</a>
        </div>
        <ul className="blog-meta">
          <li className="meta-item blog-lesson">
            <span className="meta-value"> {day} </span>
          </li>
          <li className="meta-item blog-students">
            <span className="meta-value"> {readers}min read</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
