import { Question } from '@/types/Question';
import { promises as fs } from 'fs';

export async function readJson<T>(fileName: string) {
  try {
    const path = process.cwd() + `/src/data/${fileName}`;
    const file = await fs.readFile(path, 'utf8');
    const data: T = JSON.parse(file);

    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getQuestionByStep(step: string) {
  const data = await readJson<Question[]>(process.env.QUESTIONS_CONFIG);

  return data?.find((item) => item.step === step);
}
