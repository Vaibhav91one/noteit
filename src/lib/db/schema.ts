import {pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core'

export const $notes = pgTable(
    'notes',
    {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      createdAt: timestamp('created_at').notNull().defaultNow(),
      userId: text('user_id').notNull(),
    //   flags: booleanArray('flags')
    }
  );

export type NoteType = typeof $notes.$inferInsert;
function booleanArray(arg0: string) {
    throw new Error('Function not implemented.');
}

