import React from "react";
import Trending from "../../components/Trending";
import Card from "../../components/Card";

export default function Culture() {
  return (
    <>
      <nav id="breadcrumbs" class="breadcrumbs">
        <div class="container page-wrapper">
          <a href="index.html">Home</a> / Categories /
          <span class="breadcrumb_last" aria-current="page">
            Culture
          </span>
        </div>
      </nav>
      <div className="w3l-searchblock w3l-homeblock1 py-5">
        <div className="container py-lg-4 py-md-3">
          <div className="row">
            <div className="col-lg-8 most-recent">
              <h3 className="section-title-left">Culture</h3>
              <div className="row">
                <div className="col-md-12 item">
                  <Card
                    img={`assets/images/blog.jpg`}
                    desc={`How To Be The First to Post A Comment on a Blog-Post?`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={`Johnson smith`}
                    day={`April 13, 2020`}
                    readers={6}
                  />
                </div>
                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                  <Card
                    img={`assets/images/p1.jpg`}
                    desc={` How to Start a Blog and make money every Month from it`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={`Johnson smith`}
                    day={`April 13, 2020`}
                    readers={6}
                  />
                </div>
                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                  <Card
                    img={`assets/images/p4.jpg`}
                    desc={` How to Start a Blog and make money every Month from it`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={`Johnson smith`}
                    day={`April 13, 2020`}
                    readers={6}
                  />
                </div>
                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                  <Card
                    img={`assets/images/p3.jpg`}
                    desc={` How to Start a Blog and make money every Month from it`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={`Johnson smith`}
                    day={`April 13, 2020`}
                    readers={6}
                  />
                </div>
                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                  <Card
                    img={`assets/images/p7.jpg`}
                    desc={` How to Start a Blog and make money every Month from it`}
                    details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                    author={`Johnson smith`}
                    day={`April 13, 2020`}
                    readers={6}
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
          {/* //block*/}

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
