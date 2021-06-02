import React, { useState } from "react";
import ReactDOM from "react-dom";

function Form(props: any) {
  const categories = ["Best seller", "Organic", "Dark Roast", "Ligth Roast"];
  const [checkedValues, setCheckedValues] = useState([]);

  const cvProps = { categories, checkedValues, setCheckedValues };
  return (
    <form>
      <CheckedValues {...cvProps} />
    </form>
  );
}

function CheckedValues(props: any) {
  const handleChecked = (e:any) => {
    const category = props.heroes[e.target.dataset.id];
    let newCheckedValues = props.checkedValues.filter((item: any) => item !== category);
    if (e.target.checked) newCheckedValues.push(category);
    props.setCheckedValues(newCheckedValues);
  };

  return (
    <div className="App">
      {props.heroes.map((category: any, id: any) => (
        <label key={id}>
          <input type="checkbox" data-id={id} onClick={handleChecked} /> {category}
        </label>
      ))}
      <hr />
      <h3>Results</h3>
      <p>{props.checkedValues.join(", ")}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);
