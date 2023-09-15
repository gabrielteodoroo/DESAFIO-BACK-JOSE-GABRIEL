import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { BadRequestError } from "../errors/api-error";

export const validateSchema = (schema: ZodSchema<any>) => {
  return (req: Request, next: NextFunction) => {
    const data = schema.safeParse(req.body);

    if (!data.success) {
      throw new BadRequestError(data.error.errors[0].message);
    }

    next();
  };
};
