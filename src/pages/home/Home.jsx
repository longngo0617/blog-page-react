import React from "react";
import Footer from "../../components/Footer";
import Header from '../../components/Header';
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Highlights from "./components/Highlights";
import Recent from "./components/Recent";
import Trending from "../../components/Trending";
export default function Home() {
  return (
    <>
      <div className="w3l-homeblock1 py-5">
        <div className="container pt-lg-5 pt-md-4">
          <Featured/>
          <Banner/>
          <Highlights/>
          <Recent/>
        </div>
      </div>
    </>
  );
}
