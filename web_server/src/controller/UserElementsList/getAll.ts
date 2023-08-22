import { Request, Response } from "express";
import { UserElement } from "../../entity";

export const getAll = async (req: Request, res: Response) => {
  const allElements = await UserElement.find();

  res.json(allElements);
};
