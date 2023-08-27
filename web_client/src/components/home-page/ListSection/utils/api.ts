import {
  GET_ALL_USER_ELEMENTS_URL,
  POST_ADD_USER_ELEMENT_URL,
} from "@client/consts";

import { UserListElement } from "../types";

export const getUserElementsList = async (): Promise<UserListElement[]> => {
  const response = await fetch(GET_ALL_USER_ELEMENTS_URL);
  const responseJson = await response.json();
  const userListElements = responseJson as UserListElement[];

  return userListElements;
};

export const postUserElement = async (
  element: UserListElement
): Promise<Response> => {
  const response = await fetch(POST_ADD_USER_ELEMENT_URL, {
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
