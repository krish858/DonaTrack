import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { SignupSchema, SigninSchema } from "../types/types";

export const Signup = async (req: Request, res: Response) => {
  const body = await req.body;
  const validate = await SignupSchema.safeParse(body);
  try {
    if (!validate.success) {
      return res.json({
        msg: "Invalid Inputs",
      });
    } else {
      const prisma = await new PrismaClient();
      const checkusername = await prisma.user.findFirst({
        where: {
          username: body.username,
        },
      });
      if (checkusername) {
        return res.json({
          msg: "username exsists",
        });
      }
      const checkemail = await prisma.user.findFirst({
        where: {
          email: body.email,
        },
      });
      if (checkemail) {
        return res.json({
          msg: "email exsists",
        });
      }
      const user = await prisma.user.create({
        data: {
          username: body.username,
          firstName: body.firstname,
          secondName: body.lastname,
          email: body.email,
          password: body.password,
        },
      });
      const token = await jwt.sign(
        {
          id: `${user.id}`,
          username: `${user.username}`,
        },
        "jwtsecret"
      );
      return res.json({
        msg: "user created",
        jwt: token,
      });
    }
  } catch (error) {
    return res.json({
      msg: "error",
      error: error,
    });
  }
};

export const Signin = async (req: Request, res: Response) => {
  const body = await req.body;
  const validate = await SigninSchema.safeParse(body);
  try {
    if (!validate.success) {
      return res.json({
        msg: "Invalid Inputs",
      });
    } else {
      const prisma = await new PrismaClient();
      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password,
        },
      });
      if (!user) {
        return res.json({
          msg: "wrong credentials or no such user exsists",
        });
      }
      const token = await jwt.sign(
        {
          id: `${user?.id}`,
          username: `${user?.username}`,
        },
        "jwtsecret"
      );
      return res.json({
        msg: "logged in",
        jwt: token,
      });
    }
  } catch (error) {
    return res.json({
      msg: "error",
      error: error,
    });
  }
};
