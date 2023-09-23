import { Request, Response } from "express";
import db from "../db";


export async function getProductsByCategoryId(req, res) {
    const products = await
        db.query(`SELECT p.id, p.name, p.price 
        from product as p, category as c 
        WHERE p.categoryid = c.id 
        AND c.id = ${req.params.id}`);
    res.json({ products: products.rows });
}

export async function getAllProducts(req, res) {
    const products = await db.query('SELECT * from product');
    res.json({ products: products.rows });
}

// export async function getOneProduct(req, res) {
//     const product = await db.query(`SELECT * from product where id = ${req.params.id}`);
//     res.json({ product: product.rows });
// }