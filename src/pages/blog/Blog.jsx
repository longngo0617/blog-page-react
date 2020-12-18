import React from "react";
import Card from "../../components/Card";

export default function Blog() {
  return (
    <>
      <nav id="breadcrumbs" class="breadcrumbs">
        <div class="container page-wrapper">
          <a href="index.html">Home</a> / Blog /{" "}
          <span class="breadcrumb_last" aria-current="page">
            Featured posts
          </span>
        </div>
      </nav>
      <section className="w3l-blog-block2 mt-md-5">
        <div className="container mb-lg-4">
        <h3 className="section-title-left">All Featured posts </h3>
          <div className="row">
            <div className="col-lg-4 col-md-6 item">
              <Card
                img={`assets/images/p2.jpg`}
                desc={`How To Be The First to Post A Comment on a Blog-Post?`}
                details={`Lorem ipsum dolor sit amet consectetur ipsum adipisicing
                    elit. Qui eligendi vitae sit.`}
                author={`Johnson smith`}
                day={`April 13, 2020`}
                readers={6}
              />
            </div>
            <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
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
            <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
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
            <div className="col-lg-4 col-md-6 item mt-5 pt-lg-3">
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
            <div className="col-lg-4 col-md-6 item mt-5 pt-lg-3">
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
            <div className="col-lg-4 col-md-6 item mt-5 pt-lg-3">
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
            <div className="col-lg-4 col-md-6 item mt-5 pt-lg-3">
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
            <div className="col-lg-4 col-md-6 item mt-5 pt-lg-3">
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
            <div className="col-lg-4 col-md-6 item mt-5 pt-lg-3">
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
          <div className="ad-block text-center my-5">
            <a href="#url">
              <img
                src="assets/images/ad.gif"
                className="img-fluid"
                alt="ad image"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
