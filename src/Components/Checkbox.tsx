import React, { useContext, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { BoxContext, checkBoz } from './CheckBoxContext';


export function CheckBox(){
const boxContext = useContext(BoxContext)

if (!boxContext)
  throw(new Error("FormContext is undefined!"))
  
  let checked = boxContext.checkBox.checked;
  let name = boxContext.checkBox.name;
  /* let checkedB = boxContext.checkBox.checkedB; */
  /* let checkedC = boxContext.checkBox.checkedC; */

  const [checkBoxes, setCheckBoxes] = React.useState<checkBoz>({ checked: checked, name:name/* , checkedB: checkedB, checkedC: checkedC */});

  const handleC = (event: { target: { name: string; checked: boolean; }; }) => {
    setCheckBoxes({ ...checkBoxes, [event.target.name]: event.target.checked });
    /* setCheckBoxes((prev) => ({ ...prev, ...{ [event.target.name]:event.target.checked } })); */
    /* console.log(checkBoxes.checkedA) */
};







return (
    <FormGroup row>
      <FormControlLabel
        control={
        <Checkbox
        checked={checkBoxes.checked}
        onChange={handleC}
        name="checked" />}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkBoxes.checked}
            onChange={handleC}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
       <FormControlLabel
        control={
         <Checkbox
            checked={checkBoxes.checked}
            onChange={handleC}
            name="checkedC"
            color="primary"
        />
     }
        label="Primary"
 />
    </FormGroup>
  );
}