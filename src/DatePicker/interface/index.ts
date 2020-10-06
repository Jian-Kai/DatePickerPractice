export interface I_Date {
  value: string;
  display: boolean;
}

export type I_Calendar = I_Date[];

export interface I_DatePicker {
  pickDate: string;
  onPick: (date: string) => void;
}
