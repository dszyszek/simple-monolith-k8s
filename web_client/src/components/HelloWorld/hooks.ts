import { useState, useEffect } from "react";
import { HELLO_WORLD_URL } from "@client/consts";

export const useHelloWorld = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(HELLO_WORLD_URL);
      const responseJson = await response.json();

      setData(responseJson.message);
    };

    fetchData();
  });

  return data;
};
