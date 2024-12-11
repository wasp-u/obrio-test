import { Question } from '@/types/Question';
import { AnswerButton } from '../../AnswerButton';
import styles from './ButtonsBlock.module.css';

interface Props {
  options: Question['options'];
  title: Question['title'];
  isLast: boolean;
  currentStep: Question['step'];
  saveAnswer: boolean;
}

export const ButtonsBlock = ({
  options,
  currentStep,
  isLast,
  title,
  saveAnswer,
}: Props) => {
  return (
    <div className={styles.buttonsList}>
      {options.map((option, index) => (
        <AnswerButton
          key={index}
          {...option}
          question={title}
          isLast={isLast}
          currentStep={currentStep}
          saveAnswer={saveAnswer}
        />
      ))}
    </div>
  );
};
