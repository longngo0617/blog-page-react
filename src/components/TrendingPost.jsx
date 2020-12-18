import React from 'react'

export default function TrendingPost({index,desc,author,day,readers}) {
    return (
        <div className="grids5-info">
        <h4>{index}.</h4>
        <div className="blog-info">
          <a href="blog-single.html" className="blog-desc1">
           {desc}
          </a>
          <div className="author align-items-center mt-2 mb-1">
            <a href="author.html">{author}</a> in <a href="#url">Design</a>
          </div>
          <ul className="blog-meta">
            <li className="meta-item blog-lesson">
              <span className="meta-value"> {day}</span>
            </li>
            <li className="meta-item blog-students">
              <span className="meta-value"> {readers}min read</span>
            </li>
          </ul>
        </div>
      </div>
    )
}
