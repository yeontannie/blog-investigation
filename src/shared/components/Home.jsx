import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Translator from "./Translator";
import paint from "../../assets/paint.png";
import sew from "../../assets/sew.png";
import cook from "../../assets/cook.png";
import travel from "../../assets/travel.png";

function Home() {
  return (
    <div>
      <h1 className="home-title">
        <Translator text="Manage your Blogs easily" />
      </h1>
      <h2 className="home-subtitle">
        <Translator text="sharing thoughts with the world have never been that comfy" />
      </h2>
      <p className="home-text">
        <Translator text="Login to your Blogger account with google first, you'll know what to do next :))" />
      </p>
      <div className="home-pics">
        <LazyLoadImage src={paint} width={200} alt="paints and canvas" />
        <LazyLoadImage src={sew} width={200} alt="a bunch threads" />
        <LazyLoadImage src={cook} width={200} alt="fooooood" />
        <LazyLoadImage src={travel} width={200} alt="a street in Venice" />
      </div>
    </div>
  );
}

export default Home;
