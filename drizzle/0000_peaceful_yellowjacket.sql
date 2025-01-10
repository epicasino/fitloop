CREATE TABLE `days_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text NOT NULL,
	`calorieTarget` integer NOT NULL,
	`calorieIntake` integer NOT NULL,
	`userId` integer
);
--> statement-breakpoint
CREATE TABLE `exercises_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`exerciseType` text NOT NULL,
	`duration` integer NOT NULL,
	`caloriesBurned` integer NOT NULL,
	`dayId` integer
);
--> statement-breakpoint
CREATE TABLE `meals_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`time` text NOT NULL,
	`calories` integer NOT NULL,
	`notes` text,
	`dayId` integer
);
--> statement-breakpoint
CREATE TABLE `user_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`name` text NOT NULL,
	`gender` integer NOT NULL,
	`birthday` text NOT NULL,
	`exerciseLevel` integer NOT NULL,
	`height` integer NOT NULL,
	`age` integer NOT NULL,
	`currentWeight` integer NOT NULL,
	`targetWeight` integer NOT NULL,
	`lossPace` integer NOT NULL
);
