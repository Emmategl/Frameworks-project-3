import React, { useState } from "react";

export interface LoginInfo {
    email: string,
    firstName: string,
    lastName: string,
  }

 export const init = {
    email: "",
    firstName: "",
    lastName: ""
  }
export interface IFormContext {
    login: LoginInfo;
    updateName: (email:string, firstName:string, lastName:string) => void
  }

export const FormContext = React.createContext<IFormContext | undefined>(
    undefined
  );

  type Props = {children: React.ReactNode};

  export function LoginProvider({children}: Props){
    const [login, updateName] = useState<LoginInfo>(init)
    
    const updateNameFun = (email: string, firstName: string, lastName: string) => {
        updateName((prev) => ({...prev, ...{email:email, firstName:firstName, lastName:lastName}})) 
      }

      return (
        <FormContext.Provider value={{ login: login, updateName:updateNameFun}}>
          {children}
        </FormContext.Provider>
      );

  }
