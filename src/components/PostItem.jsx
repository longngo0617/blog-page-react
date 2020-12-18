import React from "react";

export default function PostItem({
  category,
  des,
  details,
  author,
  day,
  readers,
  classes = " ",
  image,
  reverse = true,
}) {
  return (
    <div className={`grids5-info img-block-mobile ' + ${classes}`}>
      {reverse ? (
        <>
          <div className="blog-info align-self">
            <span className="category">{category}</span>
            <a href="blog-single.html" className="blog-desc mt-0">
              {des}
            </a>
            <p>{details}</p>
            <div className="author align-items-center mt-3 mb-1">
              <a href="author.html">{author}</a> in
              <a href="#url">Design</a>
            </div>
            <ul className="blog-meta">
              <li className="meta-item blog-lesson">
                <span className="meta-value">{day}</span>
              </li>
              <li className="meta-item blog-students">
                <span className="meta-value"> {readers}min read</span>
              </li>
            </ul>
          </div>
          <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3">
            <img
              src={image}
              alt=""
              className="img-fluid radius-image news-image"
            />
          </a>
        </>
      ) : (
        <>
          <a href="blog-single.html" className="d-block zoom mt-md-0 mt-3">
            <img
              src={image}
              alt=""
              className="img-fluid radius-image news-image"
            />
          </a>
          <div className="blog-info align-self">
            <span className="category">{category}</span>
            <a href="blog-single.html" className="blog-desc mt-0">
              {des}
            </a>
            <p>{details}</p>
            <div className="author align-items-center mt-3 mb-1">
              <a href="author.html">{author}</a> in
              <a href="#url">Design</a>
            </div>
            <ul className="blog-meta">
              <li className="meta-item blog-lesson">
                <span className="meta-value">{day}</span>
              </li>
              <li className="meta-item blog-students">
                <span className="meta-value"> {readers}min read</span>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
