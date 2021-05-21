import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CSS from "csstype";
import { useHistory } from "react-router-dom";
import { FormContext } from "./FormContext";
import { MyButton } from "../../App";
import { Wrapper } from "../../App.styles";

const divStyle: CSS.Properties = {
  marginBottom: "15px",

};
const labelStyle: CSS.Properties = {
  display: "inline-block",
  width: "100px",
  textAlign: "right",
  marginRight: "15px",
  
};

export interface FormData {
  email: string;
  firstName: string;
  lastName: string;
}

interface FormErrors {
    email?: string;
    firstName?: string;
    lastName?: string;
  }


export function LoginForm() {
  
  const formContext = useContext(FormContext)
    // check conext
    if (!formContext)
    throw(new Error("FormContext is undefined!"))
  
  let email = formContext.login.email;
  let firstName = formContext.login.firstName;
  let lastName = formContext.login.lastName;
  

  const history = useHistory()

  const [state, setState] = React.useState<FormData>({email: email, firstName: firstName, lastName: lastName});
  const [errors, setErrors] = React.useState<FormErrors>({});

  const validateEmail = (value: string): FormErrors => {
    const regNumber = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
    if (!regNumber.test(value)) {
      return { email: "Not a valid email" };
    }
    return { email: undefined };
  };
 
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, ...{ email: event.target.value } }));
    setErrors((prev) => ({ ...prev, ...validateEmail(event.target.value) }));
  };

  const validateFirstName = (value: string): FormErrors => {
    const regName: RegExp = /^([a-zA-Z]{2,}\s*)+$/;
    if (!regName.test(value)) {
      return { firstName: "Not a valid firstname" };
    } else if (value.length > 15) {
      return { firstName: "Must be 15 characters or less" };
    }
    return { firstName: undefined };
  };

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, ...{ firstName: event.target.value } }));
    setErrors((prev) => ({ ...prev, ...validateFirstName(event.target.value) }));
  };


  const validateLastName = (value: string): FormErrors => {
    const regName: RegExp = /^([A-ZÆØÅa-zæøå]{2,}\s*)+$/;
    if (!regName.test(value)) {
      return { lastName: "Not a valid lastname" };
    } else if (value.length > 15) {
      return { lastName: "Must be 15 characters or less" };
    }
    return { lastName: undefined };
  };
  
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, ...{ lastName: event.target.value } }));
    setErrors((prev) => ({ ...prev, ...validateLastName(event.target.value) }));
  };

  const validate = (): FormErrors => {
    return { ...validateEmail(state.email), ...validateFirstName(state.firstName), ...validateLastName(state.lastName) }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (valErrors.email || valErrors.firstName || valErrors.lastName)
      return
    else {
      formContext.updateName(state.email, state.firstName, state.lastName)
      history.goBack()
    }
  };

  return (
    <Wrapper>
      <Row>
        <Col xs="4">
          <form onSubmit={onSubmit}>
            <h1>Login</h1>
            <div style={divStyle}>
              <label style={labelStyle} htmlFor="email">
                Email:
              </label>
              <input
                type="input"
                id="email"
                name={"email"}
                value={state.email}
                onChange={handleEmail}
              />
              {errors.email ? (
                <span style={{ color: "red" }}>{errors.email}</span>
              ) : null}
            </div>
            <div style={divStyle}>
              <label style={labelStyle} htmlFor="firstName">
                Firstname:
              </label>
              <input
                type="input"
                id="firstName"
                value={state.firstName}
                onChange={handleFirstName}
              />
              {errors.firstName ? (
                <span style={{ color: "red" }}>{errors.firstName}</span>
              ) : null}
            </div>
            <div style={divStyle}>
              <label style={labelStyle} htmlFor="lastName">
                Lastname:
              </label>
              <input
                type="input"
                id="lastName"
                value={state.lastName}
                onChange={handleLastName}
              />
              {errors.lastName ? (
                <span style={{ color: "red" }}>{errors.lastName}</span>
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                padding: "20px",
                alignItems: "left",
                marginBottom: "500px",
              }}
              >
              
              <MyButton className="btn-primary" type="submit">
                Save 
              </MyButton>
              <MyButton className="btn-secondary" onClick={() => history.goBack()}>Cancel</MyButton>
            </div>
          </form>
        </Col>
      </Row>
      </Wrapper>
  );
}
