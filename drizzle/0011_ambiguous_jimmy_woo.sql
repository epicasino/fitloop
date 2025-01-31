PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_days_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text NOT NULL,
	`calorieTarget` integer NOT NULL,
	`calorieIntake` integer NOT NULL,
	`weight` integer,
	`userId` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_days_table`("id", "date", "calorieTarget", "calorieIntake", "weight", "userId") SELECT "id", "date", "calorieTarget", "calorieIntake", "weight", "userId" FROM `days_table`;--> statement-breakpoint
DROP TABLE `days_table`;--> statement-breakpoint
ALTER TABLE `__new_days_table` RENAME TO `days_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;