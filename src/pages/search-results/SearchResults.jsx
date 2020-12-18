import React from "react";

export default function SearchResults() {
  return (
    <>
      <nav id="breadcrumbs" className="breadcrumbs">
        <div className="container page-wrapper">
          <a href="index.html">Home</a> / More /{" "}
          <span className="breadcrumb_last" aria-current="page">
            Search results
          </span>
        </div>
      </nav>
      <div className="w3l-searchblock w3l-homeblock1 py-5">
        <div className="container py-lg-4 py-md-3">
          {/* block */}
          <div className="row img-block-mobile">
            <div className="col-lg-9 most-recent">
              <span>We found 5 articles for you</span>
              <h3 className="section-title-left">Search results for : "Design"</h3>
              <div className="list-view ">
                <div className="grids5-info">
                  <div className="blog-info">
                    <span className="category">Technology</span>
                    <a href="blog-single.html" className="blog-desc mt-0">Curated Collection Post : 8
                      Examples of
                      Evolution in Action
                    </a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur
                      accusamus
                      voluptas. Mollitia, natus ipsam maiores placeat elit.</p>
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
                  </div>
                  <a href="blog-single.html" className="d-block zoom"><img src="assets/images/8.jpg" alt="" className="img-fluid radius-image news-image mt-md-0 mt-3" /></a>
                </div>
                <div className="grids5-info mt-5">
                  <div className="blog-info">
                    <span className="category">Based on your reading history</span>
                    <a href="blog-single.html" className="blog-desc mt-0">The Key Benefits of Studying
                      Online
                      [Infographic]
                    </a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur
                      accusamus
                      voluptas. Mollitia, natus ipsam maiores beatae elit.</p>
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
                  </div>
                  <a href="blog-single.html" className="d-block zoom"><img src="assets/images/9.jpg" alt="" className="img-fluid radius-image news-image mt-md-0 mt-3" /></a>
                </div>
                <div className="grids5-info mt-5">
                  <div className="blog-info">
                    <span className="category">Culture</span>
                    <a href="blog-single.html" className="blog-desc mt-0">How to Write a Blog Post: A
                      Step-by-Step
                      Guide
                    </a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur
                      accusamus
                      voluptas. Mollitia, natus ipsam maiores beatae elit.</p>
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
                  </div>
                  <a href="blog-single.html" className="d-block zoom"><img src="assets/images/16.jpg" alt="" className="img-fluid radius-image news-image mt-md-0 mt-3" /></a>
                </div>
                <div className="grids5-info mt-5">
                  <div className="blog-info">
                    <span className="category">Sports and Fitness</span>
                    <a href="blog-single.html" className="blog-desc mt-0">Ivy Goes Mobile With New App for
                      Designers
                    </a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur
                      accusamus
                      voluptas. Mollitia, natus ipsam maiores beatae elit.</p>
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
                  </div>
                  <a href="blog-single.html" className="d-block zoom"><img src="assets/images/14.jpg" alt="" className="img-fluid radius-image news-image mt-md-0 mt-3" /></a>
                </div>
                <div className="grids5-info mt-5">
                  <div className="blog-info">
                    <span className="category">Health and Food </span>
                    <a href="blog-single.html" className="blog-desc mt-0">What I Wish I Had Known Before
                      Writing My
                      First Book
                    </a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur
                      accusamus
                      voluptas. Mollitia, natus ipsam maiores beatae elit.</p>
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
                  </div>
                  <a href="blog-single.html" className="d-block zoom"><img src="assets/images/15.jpg" alt="" className="img-fluid radius-image news-image mt-md-0 mt-3" /></a>
                </div>
              </div>
              {/* pagination */}
              <div className="pagination-wrapper mt-5">
                <ul className="page-pagination">
                  <li><span aria-current="page" className="page-numbers current">1</span></li>
                  <li><a className="page-numbers" href="#url">2</a></li>
                  <li><a className="page-numbers" href="#url">3</a></li>
                  <li><a className="page-numbers" href="#url">4</a></li>
                  <li><a className="page-numbers" href="#url">....</a></li>
                  <li><a className="page-numbers" href="#url">15</a></li>
                  <li><a className="next" href="#url"><span className="fa fa-angle-right" /></a></li>
                </ul>
              </div>
              {/* //pagination */}
            </div>
            <div className="col-lg-3 trending mt-lg-0 mt-5">
              <div className="pos-sticky">
                <h3 className="section-title-left">Trending </h3>
                <div className="grids5-info">
                  <h4>01.</h4>
                  <div className="blog-info">
                    <a href="blog-single.html" className="blog-desc1"> 10 Fresh Ways to Get Better Results
                      From Your
                      Blog Posts
                    </a>
                    <div className="author align-items-center mt-2 mb-1">
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
                <div className="grids5-info">
                  <h4>02.</h4>
                  <div className="blog-info">
                    <a href="blog-single.html" className="blog-desc1"> How to Optimize for on-page SEO.
                    </a>
                    <div className="author align-items-center mt-2 mb-1">
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
                <div className="grids5-info">
                  <h4>03.</h4>
                  <div className="blog-info">
                    <a href="blog-single.html" className="blog-desc1"> What to Post on the Instagram
                    </a>
                    <div className="author align-items-center mt-2 mb-1">
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
                <div className="grids5-info">
                  <h4>04.</h4>
                  <div className="blog-info">
                    <a href="blog-single.html" className="blog-desc1"> 18 Photo &amp; Video Ideas to Spark
                      Inspiration
                    </a>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //block*/}
          {/* ad block */}
          <div className="ad-block text-center mt-5">
            <a href="#url"><img src="assets/images/ad.gif" className="img-fluid" alt="ad image" /></a>
          </div>
          {/* //ad block */}
        </div>
      </div>
    </>
  );
}
