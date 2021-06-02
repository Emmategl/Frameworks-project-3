import TopPicture from "./Components/TopPictures";
import PictureBanner from "./Components/PictureBanner";
import React from "react";
import { PopularProducts } from "./Components/PopularProducts";

function Home() {
  return (
    <div>
      <TopPicture />
      <PopularProducts />
      <PictureBanner />
    </div>
  );
}
export default Home;
