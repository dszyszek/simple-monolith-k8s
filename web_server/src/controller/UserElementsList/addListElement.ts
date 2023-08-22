import { Request, Response } from "express";
import { UserElement } from "../../entity";

export const addListElement = async (req: Request, res: Response) => {
  const { value } = req.body;

  try {
    await UserElement.insert({ value });
    res.status(200).json({
      message: "List element have been inserted successfuly.",
    });
  } catch (e: any) {
    const errorMessage = e?.message ?? "Unknown error";

    res.status(400).json({
      message: "Element insertion failed",
      error: errorMessage,
    });
  }
};
