PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_user_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`gender` integer NOT NULL,
	`birthday` text NOT NULL,
	`exerciseLevel` integer NOT NULL,
	`height` integer NOT NULL,
	`cutOrBulk` integer NOT NULL,
	`currentWeight` integer NOT NULL,
	`targetWeight` integer NOT NULL,
	`pace` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_user_table`("id", "name", "gender", "birthday", "exerciseLevel", "height", "cutOrBulk", "currentWeight", "targetWeight", "pace") SELECT "id", "name", "gender", "birthday", "exerciseLevel", "height", "cutOrBulk", "currentWeight", "targetWeight", "pace" FROM `user_table`;--> statement-breakpoint
DROP TABLE `user_table`;--> statement-breakpoint
ALTER TABLE `__new_user_table` RENAME TO `user_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;