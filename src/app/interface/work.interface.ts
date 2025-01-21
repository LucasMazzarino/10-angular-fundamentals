export interface Work {
  name: string;
  date: string;
  type: string;
  hasExtraInfo?: boolean
  extraInfo: string;
  isOpen: boolean;
}