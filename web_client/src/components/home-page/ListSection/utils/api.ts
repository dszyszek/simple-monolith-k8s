import { USER_LIST_URL } from "@client/consts";

import { UserListElement } from "../types";

export const getUserElementsList = async (): Promise<UserListElement[]> => {
  const response = await fetch(USER_LIST_URL);
  const responseJson = await response.json();
  const userListElements = responseJson as UserListElement[];

  return userListElements;
};

export const postUserElement = async (
  element: UserListElement
): Promise<Response> => {
  const response = await fetch(USER_LIST_URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(element),
  });

  return await response.json();
};
