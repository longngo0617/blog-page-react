import React from "react";
import PostItem from "../../components/PostItem";
import Trending from "../../components/Trending";

export default function Startup() {
  return (
    <>
      <nav id="breadcrumbs" className="breadcrumbs">
        <div className="container page-wrapper">
          <a href="index.html">Home</a> / Categories /
          <span className="breadcrumb_last" aria-current="page">
            Startups
          </span>
        </div>
      </nav>
      <div className="w3l-startup w3l-homeblock1 py-5">
        <div className="container py-lg-4 py-md-3">
          <div className="row img-block-mobile">
            <div className="col-lg-9 most-recent">
              <h3 className="section-title-left">Startups</h3>
              <div className="list-view">
                <PostItem
                  category={"Technology"}
                  des={
                    "Curated Collection Post : 8 Examples of Evolution in Action"
                  }
                  details={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt tenetur accusamus voluptas. Mollitia, natus ipsam
          maiores placeat elit.`}
                  author={"Johnson smith"}
                  day={"April 13, 2020 "}
                  readers={6}
                  image={"assets/images/8.jpg"}
                  reverse={false}
                />
                <PostItem
                  category={"Based on your reading history"}
                  des={"The Key Benefits of Studying Online [Infographic]"}
                  details={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt tenetur accusamus voluptas. Mollitia, natus ipsam
          maiores placeat elit.`}
                  author={"Johnson smith"}
                  day={"April 13, 2020 "}
                  readers={6}
                  image={"assets/images/9.jpg"}
                  classes={"mt-5"}
                  reverse={false}
                />
                <PostItem
                  category={"Culture"}
                  des={"How to Write a Blog Post: A Step-by-Step Guide"}
                  details={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt tenetur accusamus voluptas. Mollitia, natus ipsam
          maiores placeat elit.`}
                  author={"Johnson smith"}
                  day={"April 13, 2020 "}
                  readers={6}
                  image={"assets/images/16.jpg"}
                  classes={"mt-5"}
                  reverse={false}
                />
                <PostItem
                  category={"Sports and Fitness"}
                  des={"Ivy Goes Mobile With New App for Designers"}
                  details={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt tenetur accusamus voluptas. Mollitia, natus ipsam
          maiores placeat elit.`}
                  author={"Johnson smith"}
                  day={"April 13, 2020 "}
                  readers={6}
                  image={"assets/images/14.jpg"}
                  classes={"mt-5"}
                  reverse={false}
                />
                <PostItem
                  category={"Health and Food"}
                  des={"What I Wish I Had Known Before Writing My First Book"}
                  details={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt tenetur accusamus voluptas. Mollitia, natus ipsam
          maiores placeat elit.`}
                  author={"Johnson smith"}
                  day={"April 13, 2020 "}
                  readers={6}
                  image={"assets/images/15.jpg"}
                  classes={"mt-5"}
                  reverse={false}
                />
              </div>
              {/* pagination */}
              <div className="pagination-wrapper mt-5">
                <ul className="page-pagination">
                  <li>
                    <span aria-current="page" className="page-numbers current">
                      1
                    </span>
                  </li>
                  <li>
                    <a className="page-numbers" href="#url">
                      2
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#url">
                      3
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#url">
                      4
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#url">
                      ....
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#url">
                      15
                    </a>
                  </li>
                  <li>
                    <a className="next" href="#url">
                      <span className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 trending mt-lg-0 mt-5 mb-lg-5">
              <div className="pos-sticky">
                <Trending/>
              </div>
            </div>
          </div>
          <div className="ad-block text-center mt-5">
            <a href="#url">
              <img
                src="assets/images/ad.gif"
                className="img-fluid"
                alt="ad image"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
