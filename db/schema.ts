import { relations } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user_table', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  gender: int({ mode: 'boolean' }),
  birthday: text().notNull(),
  exerciseLevel: int().notNull(),
  height: int().notNull(),
  age: int().notNull(),
  cutOrBulk: int({ mode: 'boolean' }).notNull(),
  currentWeight: int().notNull(),
  targetWeight: int().notNull(),
  pace: int().notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
  days: many(day),
}));

export const day = sqliteTable('days_table', {
  id: int().primaryKey({ autoIncrement: true }),
  date: text().notNull(),
  calorieTarget: int().notNull(),
  calorieIntake: int().notNull(),
  userId: int(),
});

export const dayRelations = relations(day, ({ one, many }) => ({
  userBy: one(user, {
    fields: [day.userId],
    references: [user.id],
  }),
  meals: many(meal),
  exercises: many(exercise),
}));

export const meal = sqliteTable('meals_table', {
  id: int().primaryKey({ autoIncrement: true }),
  time: text().notNull(),
  calories: int().notNull(),
  notes: text(),
  dayId: int(),
});

export const exercise = sqliteTable('exercises_table', {
  id: int().primaryKey({ autoIncrement: true }),
  exerciseType: text().notNull(),
  duration: int().notNull(),
  caloriesBurned: int().notNull(),
  dayId: int(),
});
