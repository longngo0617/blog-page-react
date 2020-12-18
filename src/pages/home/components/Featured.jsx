import React from "react";
import BigCard from "./BigCard";
import SmallCard from "../../../components/SmallCard";
import Trending from "../../../components/Trending";

export default function Featured() {
  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          <h3 className="section-title-left">Featured posts </h3>
          <div className="row">
            <BigCard />
            <div className="col-lg-7 col-md-6 mt-md-0 mt-5">
              <div className="list-view list-view1">
                <SmallCard
                  img={"/assets/images/1.jpg"}
                  des={"How to Create your blog domain to make it live"}
                  author={"Johnson smith"}
                  day={"April 13, 2020"}
                  readers={6}
                />
                <SmallCard
                  img={"/assets/images/2.jpg"}
                  des={"Register a Domain or Subdomain With a Website Host"}
                  author={"Johnson smith"}
                  day={"April 13, 2020"}
                  readers={6}
                  classes={"mt-5"}
                />
                <SmallCard
                  img={"/assets/images/3.jpg"}
                  des={
                    "Home to Customize your blog's theme with 3 simple steps"
                  }
                  author={"Johnson smith"}
                  day={"April 13, 2020"}
                  readers={6}
                  classes={"mt-5"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 trending mt-lg-0 mt-5">
          <Trending />
        </div>
      </div>
    </>
  );
}
