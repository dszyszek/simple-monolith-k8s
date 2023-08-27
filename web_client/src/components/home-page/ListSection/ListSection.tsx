import { useState, useEffect } from "react";

import { Button } from "@client/components/atom/Button";
import { Input } from "@client/components/atom/Input";
import { List } from "@client/components/atom/List";
import isEmpty from "lodash/isEmpty";

import { UserListElement } from "./types";
import { getUserElementsList, postUserElement } from "./utils/api";

import "./ListSection.styles.scss";

function ListSection() {
  const [inputState, setInputState] = useState("");
  const [userListElements, setUserListElements] = useState(
    [] as UserListElement[]
  );

  useEffect(() => {
    const handleGetUserElements = async (): Promise<void> => {
      const userElements = await getUserElementsList();
      setUserListElements(userElements);
    };
    handleGetUserElements();
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const onAddElementButtonClick = async () => {
    const newUserElement = { value: inputState } as UserListElement;
    await postUserElement(newUserElement);

    const freshUserElementsList = await getUserElementsList();
    setUserListElements(freshUserElementsList);
  };

  return (
    <>
      <div className="ListSection__add-element-box">
        <Input value={inputState} onChange={onInputChange} />
        <Button onClick={onAddElementButtonClick}>Add element</Button>
      </div>
      {!isEmpty(userListElements) ? (
        <List>
          {userListElements.map(({ value }) => (
            <li key={value}>{value}</li>
          ))}
        </List>
      ) : null}
    </>
  );
}

export default ListSection;
