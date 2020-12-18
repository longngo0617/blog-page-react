import React from "react";
import Trending from "../../components/Trending";
import Card from "../../components/Card";

export default function LifeStyle() {
  return (
    <>
      <nav id="breadcrumbs" className="breadcrumbs">
        <div className="container page-wrapper">
          <a href="index.html">Home</a> / Categories /{" "}
          <span className="breadcrumb_last" aria-current="page">
            Lifestyle
          </span>
        </div>
      </nav>
      <div className="w3l-searchblock w3l-homeblock1 py-5">
        <div className="container py-lg-4 py-md-3">
          <div className="row">
            <div className="col-lg-8 most-recent">
              <h3 className="section-title-left">Lifestyle</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 item">
                  <Card
                    img={"assets/images/p2.jpg"}
                    desc={`Before you start writing first blog post, you should
                    make a content plan.`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={"Johnson smith"}
                    day={"April 13, 2020 "}
                    readers={6}
                  />
                </div>
                <div className="col-lg-6 col-md-6 item mt-md-0 mt-5">
                  <Card
                    img={"assets/images/p1.jpg"}
                    desc={`Before you start writing first blog post, you should
                    make a content plan.`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={"Johnson smith"}
                    day={"April 13, 2020 "}
                    readers={6}
                  />
                </div>
                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                  <Card
                    img={"assets/images/p4.jpg"}
                    desc={`Guidelines to help you decide what your blog post should
                    be about.`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={"Johnson smith"}
                    day={"April 13, 2020 "}
                    readers={6}
                    classes={"mt-5"}
                  />
                </div>
                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                  <Card
                    img={"assets/images/p3.jpg"}
                    desc={`Now, Make money from blogging in easy steps`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={"Johnson smith"}
                    day={"April 13, 2020 "}
                    readers={6}
                    classes={"mt-5"}
                  />
                </div>
                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                  <Card
                    img={"assets/images/p7.jpg"}
                    desc={`Many ways by which your blog can earn passive income for
                    you.`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={"Johnson smith"}
                    day={"April 13, 2020 "}
                    readers={6}
                    classes={"mt-5"}
                  />
                </div>
                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                  <Card
                    img={"assets/images/p8.jpg"}
                    desc={`Keyword research for dummies using the Google Keyword
                    tool`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={"Johnson smith"}
                    day={"April 13, 2020 "}
                    readers={6}
                    classes={"mt-5"}
                  />
                </div>
              </div>
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
            <div className="col-lg-4 trending mt-lg-0 mt-5 mb-lg-5">
              <div className="pos-sticky">
                <Trending />
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
