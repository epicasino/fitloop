PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_exercises_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`exerciseType` text NOT NULL,
	`duration` integer NOT NULL,
	`caloriesBurned` integer NOT NULL,
	`dayId` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_exercises_table`("id", "exerciseType", "duration", "caloriesBurned", "dayId") SELECT "id", "exerciseType", "duration", "caloriesBurned", "dayId" FROM `exercises_table`;--> statement-breakpoint
DROP TABLE `exercises_table`;--> statement-breakpoint
ALTER TABLE `__new_exercises_table` RENAME TO `exercises_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_meals_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`time` text NOT NULL,
	`calories` integer NOT NULL,
	`notes` text,
	`dayId` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_meals_table`("id", "title", "time", "calories", "notes", "dayId") SELECT "id", "title", "time", "calories", "notes", "dayId" FROM `meals_table`;--> statement-breakpoint
DROP TABLE `meals_table`;--> statement-breakpoint
ALTER TABLE `__new_meals_table` RENAME TO `meals_table`;