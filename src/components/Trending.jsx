import React from "react";
import TrendingPost from "./TrendingPost";

export default function Trending() {
  return (
    <>
      <h3 className="section-title-left">Trending </h3>
      <TrendingPost
        index={"01"}
        desc={"How to Identify first blog post's topic"}
        author={"Johnson smith"}
        day={"April 13, 2020"}
        reader={6}
      />
      <TrendingPost
        index={"02"}
        desc={"5 ways to fix a leaky faucet"}
        author={"Johnson smith"}
        day={"April 13, 2020"}
        reader={6}
      />
      <TrendingPost
        index={"03"}
        desc={"Changing the topic scope"}
        author={"Johnson smith"}
        day={"April 13, 2020"}
        reader={6}
      />
      <TrendingPost
        index={"04"}
        desc={"Write an intro (make it captivating)."}
        author={"Johnson smith"}
        day={"April 13, 2020"}
        reader={6}
      />
    </>
  );
}
