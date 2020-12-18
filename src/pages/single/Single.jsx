import React from "react";

export default function Single() {
  return (
    <>
      <nav id="breadcrumbs" class="breadcrumbs">
        <div class="container page-wrapper">
          <a href="index.html">Home</a> / Blog /{" "}
          <span class="breadcrumb_last" aria-current="page">
            Video single post
          </span>
        </div>
      </nav>
      <div class="py-5 w3l-homeblock1 text-center">
        <div class="container mt-md-3">
          <h3 class="blog-desc-big text-center mb-4">
            Your Blog Posts are Boring? Here are 9 Tips for Making your Writing
            more Interesting
          </h3>
          <div class="blog-post-align">
            <div class="blog-post-img">
              <a href="author.html">
                <img
                  src="assets/images/author.jpg"
                  alt=""
                  class="rounded-circle img-fluid"
                />
              </a>
            </div>
            <div class="blog-post-info">
              <div class="author align-items-center mb-1">
                <a href="author.html">Johnson smith</a> in{" "}
                <a href="#url">Design</a>
              </div>
              <ul class="blog-meta">
                <li class="meta-item blog-lesson">
                  <span class="meta-value"> April 13, 2020 </span>
                </li>
                <li class="meta-item blog-students">
                  <span class="meta-value"> 6min read</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-post-main w3l-homeblock1">
        {/*/blog-post*/}
        <div className="blog-content-inf pb-5">
          <div className="container pb-lg-4">
            <div className="single-post-image">
              <div className="post-content">
                <iframe
                  src="https://www.youtube.com/embed/ZlbHdYMWSOA"
                  frameBorder={0}
                  className="mb-5"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="single-post-content">
              <p className="alphabet mb-4">
                <span className="big-letter">A</span>Lorem ipsum dolor sit
                amet,Ea consequuntur illum facere aperiam sequi optio dolor set
                consectetur.Ea ipsum sed consequuntur illum facere aperiam sequi
                optio consectetur adipisicing elitFuga, suscipit totam animi
                consequatur saepe. Lorem ipsum dolor sit amet, illum facere
                sequi optio elit..
              </p>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                corrupti odit? At iure facere, porro repellat officia quas,
                dolores magnam assumenda soluta odit harum voluptate inventore
                ipsa maiores fugiat accusamus eos nulla. Iure explicabo officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                dolorem.
              </p>
              <blockquote className="blockquote my-5">
                <div className="icon-quote">
                  <span className="fa fa-quote-left" aria-hidden="true" />
                </div>
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                sequi optio consectetur.Ea consequuntur illum facere aperiam
                sequi optio consectetur adipisicing elitFuga, suscipit totam
                animi, dolores magnam assumenda soluta odit harum.
                <footer className="blockquote-footer mt-3">Smith lara</footer>
              </blockquote>
              <h3 className="blog-desc-big m-0 mb-4">
                What makes a good blog post?
              </h3>
              <p className="mb-4">
                Excepteur sint occaecat non proident, sunt in culpa quis.
                Phasellus lacinia id erat eu. Nunc id ipsum fringilla, gravida
                felis vitae. Phasellus lacinia id, sunt in culpa quis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Unde expedita
                esse error enim repellat, architecto corporis rerum ipsa alias
                cum!{" "}
              </p>
              <p className="mb-4">
                Dolor sit sed amet, excepteur sint occaecat non proident, sunt
                in culpa quis. Phasellus lacinia id erat eu. Nunc id ipsum
                fringilla, gravida felis vitae. Phasellus lacinia id, sunt in
                culpa quis.{" "}
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                veritatis. Excepteur sint occaecat non proident, sunt in culpa
                quis. Phasellus lacinia id erat eu. Nunc id ipsum fringilla,
                gravida felis vitae. Phasellus lacinia id, sunt in culpa quis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
              <div className="sing-post-thumb mb-lg-5 mb-4 pt-3">
                <iframe
                  src="https://www.youtube.com/embed/9LznT2phLpI"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
              <h3 className="blog-desc-big m-0 mb-4">
                How to wite a Blog Post
              </h3>
              <p className="mb-4">
                Dolor sit sed amet, excepteur sint occaecat non proident, sunt
                in culpa quis. Phasellus lacinia id erat eu. Nunc id ipsum
                fringilla, gravida felis vitae. Phasellus lacinia id, sunt in
                culpa quis. Lorem ipsum dolor, sit amet elit.{" "}
              </p>
              <div className="text-list mb-4">
                <ol>
                  <li>Understand your audience. </li>
                  <li>Create your blog domain. </li>
                  <li>Sign Up With a Content Management System </li>
                  <li>Register a Domain or Subdomain With a Website Host </li>
                  <li>Customize your blog's theme. </li>
                  <li>Identify your first blog post's topic.</li>
                </ol>
              </div>
              <p className="mb-4">
                Excepteur sint occaecat non proident, sunt in culpa quis.
                Phasellus lacinia id erat eu. Nunc id ipsum fringilla, gravida
                felis vitae. Phasellus lacinia id, sunt in culpa quis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Unde expedita
                esse error enim repellat, architecto corporis rerum ipsa alias
                cum!{" "}
              </p>
              <p className="mb-4">
                Dolor sit sed amet, excepteur sint occaecat non proident, sunt
                in culpa quis. Phasellus lacinia id erat eu. Nunc id ipsum
                fringilla, gravida felis vitae. Phasellus lacinia id, sunt in
                culpa quis.{" "}
              </p>
              <h3 className="blog-desc-big m-0 mt-5 mb-4">
                Search for Inspiration
              </h3>
              <p className="mb-4">
                Vivamus a ligula quam. Ut blandit eu leo non suscipit.{" "}
                <a href="#" className="use-admin">
                  Domains
                </a>{" "}
                In interdum ullamcorper dolor eu mattis.Nulla quis lorem
                neque,Nulla quis lorem neque, mattis venenatis lectus.
                <a href="#" className="use-admin">
                  {" "}
                  Sub Domains
                </a>
                In interdum ullamcorper dolor eu mattis.Nulla quis lorem neque,
                mattis venenatis lectus.
              </p>
              <p className="mb-4">
                Dolor sit sed amet, excepteur sint occaecat non proident, sunt
                in culpa quis. Phasellus lacinia id erat eu. Nunc id ipsum
                fringilla, gravida felis vitae. Phasellus lacinia id, sunt in
                culpa quis.{" "}
              </p>
              <div className="d-grid left-right mt-5 pb-md-5">
                <div className="buttons-singles tags">
                  <h4>Tags :</h4>
                  <a href="#blog-tag">Culture</a>
                  <a href="#blog-tag">Sports</a>
                  <a href="#blog-tag">Technology</a>
                  <a href="#blog-tag">Health</a>
                </div>
                <div className="buttons-singles">
                  <h4>Share :</h4>
                  <a href="#blog-share">
                    <span className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#blog-share">
                    <span className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#blog-share">
                    <span className="fa fa-google-plus" aria-hidden="true" />
                  </a>
                  <a href="#blog-share">
                    <span className="fa fa-pinterest-p" aria-hidden=" true" />
                  </a>
                </div>
              </div>
              {/*//author-card*/}
              <div className="author-card mt-5">
                <div className="row align-items-center">
                  <div className="col-sm-3 col-6">
                    <div>
                      <img
                        src="assets/images/author.jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-9 mt-sm-0 mt-3">
                    <h3 className="mb-3 title">Alexander Ronald</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident, sed et excepturi. Distinctio fugit odit? Fugit
                      ipsam. Lorem ipsum dolor sit.
                    </p>
                    <ul className="author-icons mt-4">
                      <li>
                        <a className="facebook" href="#url">
                          <span className="fa fa-facebook" aria-hidden="true" />
                        </a>{" "}
                      </li>
                      <li>
                        <a className="twitter" href="#url">
                          <span className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a className="google" href="#url">
                          <span
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          />
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
                  </div>
                </div>
              </div>
              {/*//author-card*/}
              <div className="comments mt-5">
                <h4 className="side-title ">Comments (2)</h4>
                <div className="media mt-4">
                  <div className="img-circle">
                    <img
                      src="assets/images/c1.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="media-body">
                    <ul className="time-rply mb-2">
                      <li>
                        <a href="#URL" className="name mt-0 mb-2 d-block">
                          William Jack
                        </a>
                        April 15th, 2020 - 10:02 pm
                      </li>
                      <li className="reply-last">
                        <a href="#reply" className="reply">
                          Reply
                        </a>
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Repellat, hic reprehenderit eum cupiditate deleniti, Lorem
                      ipsum dolor sit amet consectetur adipisicing.....
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="img-circle">
                    <img
                      src="assets/images/c2.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="media-body">
                    <ul className="time-rply mb-2">
                      <li>
                        <a href="#URL" className="name mt-0 mb-2 d-block">
                          James Harper
                        </a>
                        April 15th, 2020 - 12:30 pm
                      </li>
                      <li className="reply-last">
                        <a href="#reply" className="reply">
                          Reply
                        </a>
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing. Ea
                      consequuntur illum facere aperiam sequi optio consectetur
                      adipisicing elitFuga, suscipit totam animi.....
                    </p>
                    <div className="media second mt-4 p-0 pt-2">
                      <a className="img-circle img-circle-sm" href="#url">
                        <img
                          src="assets/images/c3.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </a>
                      <div className="media-body">
                        <ul className="time-rply mb-2">
                          <li>
                            <a href="#URL" className="name mt-0 mb-2 d-block">
                              Jackson Wyatt
                            </a>
                            April 15th, 2020 - 14:20 pm
                          </li>
                          <li className="reply-last">
                            <a href="#reply" className="reply">
                              {" "}
                              Reply
                            </a>
                          </li>
                        </ul>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis corrupti quos dolores et. Lorem
                          ipsum dolor sit amet......
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leave-comment-form mt-5" id="reply">
                <h4 className="side-title mb-2">Leave a Reply</h4>
                <p className="mb-4">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form action="#" method="post">
                  <div className="form-group">
                    <textarea
                      name="Comment"
                      className="form-control"
                      placeholder="Your Comment*"
                      required
                      spellCheck="false"
                      defaultValue={""}
                    />
                  </div>
                  <div className="input-grids row">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="Name"
                        className="form-control"
                        placeholder="Your Name*"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        type="email"
                        name="Email"
                        className="form-control"
                        placeholder="Email*"
                        required
                      />
                    </div>
                  </div>
                  <div className="submit text-right">
                    <button className="btn btn-style btn-primary">
                      Post Comment{" "}
                    </button>
                  </div>
                </form>
              </div>
              {/* related posts */}
              <div className="item mt-5 pt-lg-5">
                <h3 className="section-title-left">
                  Maybe You are Interested in{" "}
                </h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="list-view list-view1">
                      <div className="grids5-info">
                        <a href="blog-single.html" className="d-block zoom">
                          <img
                            src="assets/images/4.jpg"
                            alt=""
                            className="img-fluid radius-image news-image"
                          />
                        </a>
                        <div className="blog-info align-self">
                          <a href="blog-single.html" className="blog-desc1">
                            Edit/proofread your post, and fix your formatting.
                          </a>
                          <div className="author align-items-center mt-3 mb-1">
                            <a href="author.html">Johnson smith</a> in{" "}
                            <a href="#url">Design</a>
                          </div>
                          <ul className="blog-meta">
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">
                                {" "}
                                April 13, 2020{" "}
                              </span>
                            </li>
                            <li className="meta-item blog-students">
                              <span className="meta-value"> 6min read</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-5">
                    <div className="list-view list-view1">
                      <div className="grids5-info">
                        <a href="blog-single.html" className="d-block zoom">
                          <img
                            src="assets/images/6.jpg"
                            alt=""
                            className="img-fluid radius-image news-image"
                          />
                        </a>
                        <div className="blog-info align-self">
                          <a href="blog-single.html" className="blog-desc1">
                            How to Create your blog domain to make it live
                          </a>
                          <div className="author align-items-center mt-3 mb-1">
                            <a href="author.html">Johnson smith</a> in{" "}
                            <a href="#url">Design</a>
                          </div>
                          <ul className="blog-meta">
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">
                                {" "}
                                April 13, 2020{" "}
                              </span>
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
              </div>
              {/* //related posts */}
            </div>
          </div>
          {/*//blog-post*/}
        </div>
      </section>
    </>
  );
}
