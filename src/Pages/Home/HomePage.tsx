import TopPicture from '../../Pages/Home/Components/topPictures';
import Carousel from '../../Test/Carousel';
import PictureBanner from '../../Pages/Home/Components/pictureBanner';
import { FormContext } from '../Login/FormContext';
import React, { useContext } from "react";
import {FormData} from '../../Pages/Login/LoginForm';

function Home() {

  const formContext = useContext(FormContext)
  if (!formContext)
    throw(new Error("FormContext is undefined!"))

    let firstName = formContext.login.firstName;
    let lastName = formContext.login.lastName;
    let email = formContext.login.email;
    const [state, setState] = React.useState<FormData>({ firstName: firstName, lastName: lastName, email: email });


    return (
        <div>
          <h4>{state.lastName}</h4>
          <TopPicture/>
          {/* <Carousel/> */}
          <PictureBanner/>
        </div>
      );
  }
  export default Home