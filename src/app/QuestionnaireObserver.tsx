'use client';

import { useAppSelector } from '@/store/hooks';
import { redirect, usePathname } from 'next/navigation';

export const QuestionnaireObserver = () => {
  const answers = useAppSelector((state) => state.answers.answers);
  const pathname = usePathname();

  if (
    Object.keys(answers).length === 0 &&
    pathname !== `/${process.env.FIRST_STEP}`
  ) {
    redirect(process.env.FIRST_STEP);
  }

  return <></>;
};
