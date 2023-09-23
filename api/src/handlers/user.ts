import { PrismaClient } from "@prisma/client";
import { hashPassword, createJWT, comparePasswords } from "../middlewares/auth";
import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJWT(user);
    res.json({ token });
}

export const signin = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })
    const isValid: Boolean = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
        res.status(401);
        res.json({ message: "User or password incorrect" })
        return;
    }

    const token = createJWT(user);
    res.json({ token });
}