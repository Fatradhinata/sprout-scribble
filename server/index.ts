import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@/server/schema'

export const db = drizzle(process.env.POSTGRES_URL!, {schema, logger: true});
