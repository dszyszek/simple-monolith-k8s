import React from "react";

type Props = {
  children?: React.ReactNode;
  [key: string]: unknown;
};

function Button({ children, ...restOfProps }: Props) {
  return <button {...restOfProps}>{children}</button>;
}

export default Button;
