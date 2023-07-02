import React from "react";

import { useHelloWorld } from "./hooks";

function HelloWorld() {
  const message = useHelloWorld();

  return (
    <>
      <h1>Hello World</h1>
      {message}
    </>
  );
}

export default HelloWorld;
