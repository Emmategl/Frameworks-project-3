import React from "react";

/* export interface Name {
    firstName: string,
}

export interface ILoginContext {
    firstName: Name;
    setName: (firstName:string) => void
}

export const NameContext = React.createContext<ILoginContext | undefined>(undefined)

export const init = {
    firstName: "",
  }

type Props = {children: React.ReactNode};

export function useName(){
    return useContext(NameContext)
} */

/* export const NameProvider = ({children}: Props) => {
const [name, setName] = useState<Name>(init)
const setNameFun = (firstName: string) => {
    setName((prev) => ({...prev, ...{firstname:firstName}})) 
  }

return (
    <NameContext.Provider value={{firstName:name, setName:setNameFun}}>
    {children}
    </NameContext.Provider>
)

}

function useContext(NameContext: React.Context<ILoginContext | undefined>) {
    throw new Error("Function not implemented.");
}

function useState<T>(init: { firstName: string; }): [any, any] {
    throw new Error("Function not implemented.");
}

 */