// import { PrismaClient, Unit } from "@prisma/client"
import { Request, Response } from "express";
import db from "../db";

export const getAllUnits = async (req, res: Response) => {
    const units = await db.query("SELECT * from Units");
    console.log(req.params)
    res.json({ units: units.rows })
}

export const getUnitsByCity = async (req, res: Response) => {
    console.log(req.params)
    const units = await
        db.query(
            `SELECT  u.address, u.unittype, c.name
            FROM units as u, cities as c 
            WHERE u.cityid = c.id 
            AND c.name = '${req.params.city}'`
        );
    res.json({ units: units.rows })
}


export const getUnitsByCityAndType = async (req, res: Response) => {
    console.log(req.params)
    const units = await
        db.query(
            `SELECT  u.address, u.unittype, c.name
            FROM units as u, cities as c 
            WHERE u.cityid = c.id 
            AND unittype = '${req.params.unittype}'
            AND c.name LIKE '%${req.params.city}%'`
        );
    res.json({ units: units.rows })
}


export const getUnitsByType = async (req, res: Response) => {
    // const prisma = new PrismaClient();
    // console.log(req.params.unittype)
    // const units = await prisma.unit.findMany({
    //     where: {
    //         unitType: req.params.unittype
    //     }
    // })
    // res.json({ units })
}

export const getUnitsByUser = async (req, res: Response) => {
    // const prisma = new PrismaClient();
    // const user = await prisma.user.findUnique({
    //     where: {
    //         id: req.user.id
    //     },
    //     include: {
    //         units: true
    //     }
    // })
    // res.json({ data: user.units })
}

export const getOneUnit = async (req, res: Response) => {
    // const prisma = new PrismaClient();
    // const unit = await prisma.unit.findFirst({
    //     where: {
    //         id: +req.params.id,
    //         userId: req.user.id
    //     }
    // })
    // res.json({ data: unit })
}

export const createUnit = async (req, res: Response) => {
    // const prisma = new PrismaClient();
    // const unit = await prisma.unit.create({
    //     data: {
    //         address: req.body.address
    //     }
    // })
    // res.json({ data: unit })
}

export const updateUnit = async (req, res: Response) => {
    // const prisma = new PrismaClient();
    // // console.log(+req.params.id)
    // const unit = await prisma.unit.update({
    //     where: {
    //         id: +req.params.id,
    //         userId: req.user.id
    //     },
    //     data: {
    //         address: req.body.address
    //     }
    // })
    // res.json({ data: unit })
}

export const deleteUnit = async (req, res: Response) => {
    // const prisma = new PrismaClient();
    // const unit = await prisma.unit.delete({
    //     where: {
    //         id: +req.params.id,
    //         userId: req.user.id
    //     }
    // })
    // res.json({ data: unit })
}