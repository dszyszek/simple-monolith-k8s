import React from "react";

type Props = {
  children?: React.ReactNode;
  [key: string]: unknown;
};

function Input({ children, ...restOfProps }: Props) {
  return <input {...restOfProps}>{children}</input>;
}

export default Input;
