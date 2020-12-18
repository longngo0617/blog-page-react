import React from "react";
import SmallCard from "../../../components/SmallCard";

export default function RecentSmall() {
  return (
    <div className="row most-recent-inner my-5 py-lg-4">
      <div className="col-md-6">
        <SmallCard
          img={"assets/images/10.jpg"}
          des={"Home to write High-Level blog posts"}
          author={"Johnson smith"}
          day={"April 13, 2020"}
          readers={6}
        />
        <SmallCard
          img={"assets/images/11.jpg"}
          des={"9 Reasons why your Blog posts are Hard to Read"}
          author={"Johnson smith"}
          day={"April 13, 2020"}
          readers={6}
          classes={"mt-5"}
        />
      </div>
      <div className="col-md-6 mt-md-0 mt-5">
        <SmallCard
          img={"assets/images/12.jpg"}
          des={"How to run a Blog lead generation Analysis"}
          author={"Johnson smith"}
          day={"April 13, 2020"}
          readers={6}
        />
        <SmallCard
          img={"assets/images/13.jpg"}
          des={"The Anatomy of a perfect Blog post"}
          author={"Johnson smith"}
          day={"April 13, 2020"}
          readers={6}
          classes={"mt-5"}
        />
      </div>
    </div>
  );
}
