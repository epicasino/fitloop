import { createContext } from 'react';

export const UserContext = createContext<
  | {
      id: number;
      name: string;
      gender: boolean;
      birthday: string;
      exerciseLevel: number;
      height: number;
      cutOrBulk: boolean;
      currentWeight: number;
      targetWeight: number;
      pace: number;
    }
  | undefined
>(undefined);

export const DayContext = createContext<
  | {
      date: string;
      id: number;
      calorieTarget: number;
      calorieIntake: number;
      userId: number | null;
    }
  | undefined
>(undefined);
