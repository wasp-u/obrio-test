'use client';

import { useAppSelector } from '@/store/hooks';

export default function Page() {
  const result = useAppSelector((state) => state.answers.answers);

  const answers = Object.keys(result).map((key) => result[key]);

  return (
    <div>
      <h1>Result</h1>

      {answers.map((item) => (
        <div key={item.question}>
          {item.question} -- <b>{item.answer}</b>
        </div>
      ))}
    </div>
  );
}
