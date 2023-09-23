import { PrismaClient, Unit } from "@prisma/client"
import { Request, Response } from "express";

export const getAllUnits = async (req, res: Response) => {
    const prisma = new PrismaClient();
    const units: Unit[] = await prisma.unit.findMany()
    res.json(units)
}

export const getUnitsByUser = async (req, res: Response) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            units: true
        }
    })
    res.json({ data: user.units })
}

export const getOneUnit = async (req, res: Response) => {
    const prisma = new PrismaClient();
    const unit = await prisma.unit.findFirst({
        where: {
            id: +req.params.id,
            userId: req.user.id
        }
    })
    res.json({ data: unit })
}

export const createUnit = async (req, res: Response) => {
    const prisma = new PrismaClient();
    const unit = await prisma.unit.create({
        data: {
            address: req.body.address,
            userId: req.user.id
        }
    })
    res.json({ data: unit })
}

export const updateUnit = async (req, res: Response) => {
    const prisma = new PrismaClient();
    // console.log(+req.params.id)
    const unit = await prisma.unit.update({
        where: {
            id: +req.params.id,
            userId: req.user.id
        },
        data: {
            address: req.body.address
        }
    })
    res.json({ data: unit })
}

export const deleteUnit = async (req, res: Response) => {
    const prisma = new PrismaClient();
    const unit = await prisma.unit.delete({
        where: {
            id: +req.params.id,
            userId: req.user.id
        }
    })
    res.json({ data: unit })
}