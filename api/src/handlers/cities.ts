import { Request, Response } from "express";
import db from "../db";

export async function getCities(req, res) {
    const cities = await db.query('SELECT * from cities');
    res.json({ cities: cities.rows });

    // const units = await db.query("SELECT * from Units");
    // console.log(req.params)
    // res.json({ units: units.rows })
}