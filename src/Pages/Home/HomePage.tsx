import TopPicture from '../../Pages/Home/Components/topPictures';
/* import Carousel from '../../Test/Carousel'; */
import PictureBanner from '../../Pages/Home/Components/pictureBanner';
import { FormContext } from '../Login/FormContext';
import React, { useContext } from "react";
import {FormData} from '../../Pages/Login/LoginForm';
import { Carousel } from './Components/Carousel';

function Home() {

    return (
        <div>
          <TopPicture/>
          <Carousel/>
          <PictureBanner/>
        </div>
      );
  }
  export default Home