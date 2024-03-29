import React from "react";

type props = {
  children: React.ReactElement;
};

const RequiredAuth: React.FC<props> = ({ children }) => {
  return children;
};

export default RequiredAuth;
