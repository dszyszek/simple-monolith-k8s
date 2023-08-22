import { Request, Response } from "express";

export const getAll = (req: Request, res: Response) => {
  const getAllElementsTempResponse = [
    { value: "aaa" },
    { value: "bbb" },
    { value: "ccc" },
  ];
  res.json(getAllElementsTempResponse);
};
