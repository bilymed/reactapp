import { Pool, Client } from 'pg'

// export const db = async () => {

const db = new Pool()

export default db;



// {
    //     user: process.env.PGUSE,
    //     host: process.env.PGHOST,
    //     database: process.env.PGDATABASE,
    //     password: process.env.PGPASSWORD,
    //     port: +process.env.PGPORT
    // }