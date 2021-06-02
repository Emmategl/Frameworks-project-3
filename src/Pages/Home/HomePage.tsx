import TopPicture from './Components/TopPictures';
/* import Carousel from '../../Test/Carousel'; */
import PictureBanner from './Components/PictureBanner';
import { FormContext } from '../Login/FormContext';
import React, { useContext } from "react";
import {FormData} from '../../Pages/Login/LoginForm';
import { Carousel } from './Components/PopularProducts';

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