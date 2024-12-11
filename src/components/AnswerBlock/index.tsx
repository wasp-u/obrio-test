import { Question, ScreenType } from '@/types/Question';
import { ButtonsBlock } from './ButtonsBlock';
import { InputBlock } from './InputBlock';

const screenTypes = {
  default: ButtonsBlock,
  info: ButtonsBlock,
  input: InputBlock,
};

interface Props {
  screenType: ScreenType;
  options: Question['options'];
  title: Question['title'];
  isLast: boolean;
  currentStep: Question['step'];
  saveAnswer: boolean;
}

export const AnswerBlock = ({ screenType = 'default', ...rest }: Props) => {
  const CurrentBlock = screenTypes[screenType] || ButtonsBlock;

  return <CurrentBlock {...rest} />;
};
