export interface iUserData {
  name: string | null;
  gender: boolean | null;
  birthday: Date;
  height: number | null;
  currentWeight: number | null;
  targetWeight: number | null;
  exerciseLevel: number | null;
  pace: number | null;
  cutOrBulk: boolean | null;
}

export interface iRegisterCarousel {
  id: number;
  type: string;
  fields?: Field[];
}

export interface Field {
  type: string;
  text: string;
  options?: Option[];
  paces?: Pace[];
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
