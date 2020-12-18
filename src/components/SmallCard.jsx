import React from "react";

export default function SmallCard({img,des,author,day,readers,classes =""}) {
  return (
    <div className={'grids5-info ' +  classes} >
      <a href="blog-single.html" className="d-block zoom">
        <img
          src={img}
          alt=""
          className="img-fluid radius-image news-image"
        />
      </a>
      <div className="blog-info align-self">
        <a href="blog-single.html" className="blog-desc1">
          {des}
        </a>
        <div className="author align-items-center mt-3 mb-1">
          <a href="author.html">{author}</a> in <a href="#url">Design</a>
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
