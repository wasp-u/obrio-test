'use client';

import { formatTitle } from '@/helpers';
import { useAppSelector } from '@/store/hooks';
import { AnswersState } from '@/store/slice';
import { Question } from '@/types/Question';

interface Props {
  title: Question['title'];
  values?: Question['values'];
}

const getSavedValues = (
  values: Question['values'] = {},
  answers: AnswersState['answers'],
) => {
  const res = Object.keys(values).reduce(
    (acc, key) => {
      acc[key] = answers[values[key]].answer;

      return acc;
    },
    {} as Record<string, string>,
  );

  return res;
};

export const FormattedTitle = ({ title, values }: Props) => {
  const answers = useAppSelector((state) => state.answers.answers);

  const savedValues = getSavedValues(values, answers);

  return <h1>{formatTitle(title, savedValues)}</h1>;
};
