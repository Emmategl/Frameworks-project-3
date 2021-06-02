import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

export interface checkBoz {
    name: string;
    checked: boolean }
  /*  checkedB: boolean, */
  /*  checkedC: boolean, */
  

export interface IBoxContext {
    checkBox: checkBoz;
    setCheckBoxes: (
        checked: React.ChangeEvent<HTMLInputElement>
        /* checkedB: React.ChangeEvent<HTMLInputElement>, */
        /* checkedC: React.ChangeEvent<HTMLInputElement>, */) => void
    }

  

export const BoxContext = React.createContext<IBoxContext | undefined>(
    undefined
  );

  type Props = {children: React.ReactNode};

  export function CheckBoxProvider({children}: Props){
    const [checkBoxes, setCheckBoxes] = React.useState({
        checked: false,
        name: "checked"
        /* checkedB: false, */
        /* checkedC: false, */
      });
      
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBoxes({ ...checkBoxes, [event.target.name]: event.target.checked });
      };

      return (
        <BoxContext.Provider value={{checkBox: checkBoxes, setCheckBoxes:handleChange}}>
          {children}
        </BoxContext.Provider>
      );
  
      }

    
    
    
    
    
    
    
      