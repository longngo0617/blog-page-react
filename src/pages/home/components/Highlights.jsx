import React from "react";
import SmallCard from "../../../components/SmallCard";

export default function Highlights() {
  return (
    <div className="item mt-5 pt-lg-5">
      <h3 className="section-title-left">Today Highlights </h3>
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="list-view list-view1">
            <SmallCard
              img={"assets/images/4.jpg"}
              des={"Edit/proofread your post, and fix your formatting."}
              author={"Johnson smith"}
              day={"April 13, 2020"}
              readers={6}
            />
            <SmallCard
              img={"assets/images/5.jpg"}
              des={"The Beginner's Guide to Starting a Successful Blog in 2020"}
              author={"Johnson smith"}
              day={"April 13, 2020"}
              readers={6}
              classes={"mt-5"}
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="list-view list-view1">
            <SmallCard
              img={"assets/images/6.jpg"}
              des={"Home to Organize your content in an outline."}
              author={"Johnson smith"}
              day={"April 13, 2020"}
              readers={6}
            />
            <SmallCard
              img={"assets/images/7.jpg"}
              des={"Home to Organize your content in an outline."}
              author={"Johnson smith"}
              day={"April 13, 2020"}
              readers={6}
              classes={"mt-5"}
            />
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 mt-lg-0 mt-5">
          <div className="ad-img">
            <a href="#ad-img">
              <img
                src="assets/images/ad1.jpg"
                className="img-fluid"
                alt="ad image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
