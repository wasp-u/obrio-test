import { Question } from '@/types/Question';

interface Props {
  options: Question['options'];
  title: Question['title'];
  isLast: boolean;
  currentStep: Question['step'];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const InputBlock = (props: Props) => {
  return <div>input</div>;
};
