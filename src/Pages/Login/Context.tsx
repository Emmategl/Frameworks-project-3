import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({});

export const Provider = (props: { name: any; children: any; }) => {
  // Initial values are obtained from the props
  const {
    name: initialName,
    children
  } = props;

  // Use State to keep the values
  const [name, setName] = useState(initialName);

  const changeName = (name: any[]) => {
    const newUser = { id: new Date().getTime().toString(), name: name };
    setName(name.concat([newUser]));
  };

  // Make the context object:
  const nameContext = {
    name,
    setName,
    changeName
  };

  // pass the value in provider and return
  return <UserContext.Provider value={nameContext}>{children}</UserContext.Provider>;
};

export const { Consumer } = UserContext;

Provider.propTypes = {
  name: PropTypes.string
};

Provider.defaultProps = {
  name: []
};