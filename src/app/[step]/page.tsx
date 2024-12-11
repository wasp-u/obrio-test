import styles from './page.module.css';
import { FormattedTitle } from '../../components/FormattedTitle';
import { Header } from '../../components/Header';
import { Question } from '@/types/Question';
import { getQuestionByStep, readJson } from '@/json/readJson';
import { notFound } from 'next/navigation';
import { AnswerBlock } from '@/components/AnswerBlock';
import { Subtitle } from '@/components/Subtitle';

export async function generateStaticParams() {
  const data = await readJson<Question[]>(process.env.QUESTIONS_CONFIG);

  if (!data) return [];

  return data.map((question) => ({
    step: question.step,
  }));
}

type Params = Promise<{ step: string }>;

export default async function Page(props: { params: Params }) {
  const { step } = await props.params;
  const question = await getQuestionByStep(step);

  if (!question) {
    notFound();
  }

  return (
    <div className={`${styles.wrapper} ${question?.screenType ?? 'default'}`}>
      <Header screenType={question?.screenType} />

      <div className={styles.container}>
        <div className={styles.title}>
          <FormattedTitle title={question.title} values={question.values} />
        </div>

        <div className={styles.subtitle}>
          <Subtitle
            screenType={question.screenType}
            subtitle={question.subtitle}
          />
        </div>

        <AnswerBlock
          isLast={!!question.last}
          currentStep={question.step}
          options={question.options || []}
          screenType={question.screenType || 'default'}
          title={question.title}
          saveAnswer={question.screenType !== 'info'}
        />
      </div>
    </div>
  );
}
