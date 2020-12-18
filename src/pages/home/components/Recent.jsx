import React from "react";
import PostItem from "../../../components/PostItem";
import Trending from "../../../components/Trending";
import TrendingPost from "../../../components/TrendingPost";
import RecentSmall from "./RecentSmall";

export default function Recent({props =true}) {

  return (
    <div className="row mt-5 pt-5">
      <div className="col-lg-9 most-recent">
        <h3 className="section-title-left">Most Recent posts </h3>
        <div className="list-view ">
          <PostItem
            category={"Technology"}
            des={"Curated Collection Post : 8 Examples of Evolution in Action"}
            details={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt tenetur accusamus voluptas. Mollitia, natus ipsam
          maiores placeat elit.`}
            author={"Johnson smith"}
            day={"April 13, 2020 "}
            readers={6}
            image={"assets/images/8.jpg"}
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
          />
          {props ? <RecentSmall/> : <div></div> }
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
        {/* //pagination */}
      </div>
      <div className="col-lg-3 trending mt-lg-0 mt-5 mb-lg-5">
        <div className="pos-sticky">
          <Trending/>
        </div>
      </div>
    </div>
  );
}
