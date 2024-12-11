export type ScreenType = 'info' | 'default' | 'input';

export interface Question {
  step: string;
  title: string;
  options: { answer: string; nextStep: string; savedStep?: string }[];
  last?: boolean;
  subtitle?: string;
  screenType?: ScreenType;
  values?: Record<string, string>;
}
