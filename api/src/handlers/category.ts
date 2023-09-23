import { Request, Response } from "express";
import db from "../db";


export async function getAllCategories(req, res) {
    const categories = await db.query('SELECT * from category');
    res.json({ categories: categories.rows });
}

export async function getOneCategory(req, res) {
    const category = await db.query(`SELECT * from category where id = ${req.params.id}`);
    res.json({ category: category.rows });
}