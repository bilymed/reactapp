import { sign, verify } from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash);
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 5);
}

export const createJWT = (user) => {
    const token = sign({
        id: user.id,
        username: user.username
    },
        process.env.JWT_SECRET
    )
    return token;
}

export const protect = (req, res: Response, next) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401);
        res.json({ message: 'Not autorized' })
        return;
    }

    const [, token] = bearer.split(' ');
    if (!token) {
        res.status(401);
        res.json({ message: 'Not autorized' })
        return;
    }
    console.log(token)

    try {
        const user = verify(token, process.env.JWT_SECRET);
        console.log(user)
        req.user = user;
        next();
    } catch (e) {
        console.log(e)
        res.status(401);
        res.json({ message: 'Not Valid Token' })
        return;
    }
}