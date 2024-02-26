import {neon, neonConfig} from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true;
//cache all connections

if(!process.env.DATABASE_URL){
    throw new Error("DATABASE_URL not defined")
}

const sql : any = neon(process.env.DATABASE_URL);

export const db = drizzle(sql);