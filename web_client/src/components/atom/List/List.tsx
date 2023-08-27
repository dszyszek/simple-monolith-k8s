import React from "react";

import "./List.styles.scss";

type Props = {
  children: React.ReactNode;
};

function List({ children }: Props) {
  return <ul className="ListWrapper">{children}</ul>;
}

export default List;
