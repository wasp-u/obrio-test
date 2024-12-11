'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { saveStep, setAnswer } from '@/store/slice';
import { useRouter } from 'next/navigation';

interface Props {
  answer: string;
  nextStep: string;
  question: string;
  currentStep: string;
  savedStep?: string;
  isLast?: boolean;
  saveAnswer: boolean;
}

export const AnswerButton = ({
  answer,
  nextStep,
  question,
  currentStep,
  savedStep,
  isLast,
  saveAnswer = true,
}: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const savedStoreStep = useAppSelector((state) => state.answers.savedStep);

  const clickAnswerHandler = () => {
    if (saveAnswer) {
      dispatch(setAnswer({ answer, question, step: currentStep }));
    }

    if (isLast) {
      router.push('result');
      return;
    }

    if (nextStep.includes('{savedStep}')) {
      router.push(savedStoreStep);
      return;
    }

    if (!!savedStep) {
      dispatch(saveStep(savedStep));
    }

    router.push(`${nextStep}`);
  };

  return <button onClick={clickAnswerHandler}>{answer}</button>;
};
