import { ShowBehavior } from "./show-behavior.enum";

export interface SeatingConfig {
  showBehavior: ShowBehavior;
  allowManualSelection: boolean;
}