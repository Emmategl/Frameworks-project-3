import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import PropTypes from "prop-types";
import Cart from "../../Components/Cart/Cart";
import { CartItemType } from "../../Components/CartItemType";
import { HandleAddToCart, HandleDecrementFromCart, HandleRemoveFromCart } from "../../Components/HandleAddToCart";

export interface LoginInfo {
    firstName: string,
    lastName: string,
    email: string,
  }

 export const init = {
    firstName: "",
    lastName: "",
    email: ""
  }
export interface IFormContext {
    login: LoginInfo;
    updateName: (firstName:string, lastName:string, email:string) => void
  }

// create context, but there is no default value - set it to undefined.
export const FormContext = React.createContext<IFormContext | undefined>(
    undefined
  );

  export const { Consumer } = FormContext;

  type Props = {children: React.ReactNode};

  export function LoginProvider({children}: Props){
    const [login, updateName] = useState<LoginInfo>(init)
    const updateNameFun = (firstName: string, lastName: string, email: string) => {
        updateName((prev) => ({...prev, ...{email:email, firstname:firstName, lastName:lastName}})) 
      }


      return (
        <FormContext.Provider value={{ login: login, updateName:updateNameFun}}>
          {children}
          {/* <LoginForm/> */}
        </FormContext.Provider>
      );

  }
