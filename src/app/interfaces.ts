export interface Hero {
  id: number;
  name: string;
  power: number;
}

export interface SortingOption {
  name: string;
  value: string;
  handler: CallableFunction;
}
