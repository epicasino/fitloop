export interface iUserData {
  name: string | null;
  gender: boolean;
  birthday: string | null;
  height: number;
  currentWeight: number;
  targetWeight: number;
  exerciseLevel: number;
  pace?: string | null;
  cutOrBulk?: boolean;
}

export interface iRegisterCarousel {
  id: number;
  type: string;
  text?: string;
  fields?: Field[];
  paces?: Pace[];
}

export interface Field {
  type: string;
  text: string;
  options?: Option[];
  ft?: number[];
  in?: number[];
}

export interface Option {
  value: number;
  text: string;
}

export interface Pace {
  id: number;
  options: PaceOption[];
}

export interface PaceOption {
  type: string;
  value: number;
}
