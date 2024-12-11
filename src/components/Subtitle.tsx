import { ScreenType } from '@/types/Question';

interface Props {
  subtitle?: string;
  screenType?: ScreenType;
}

export const Subtitle = ({ subtitle, screenType }: Props) => {
  if (!subtitle) return null;

  return (
    <p className={screenType === 'info' ? 'subtitle2' : 'subtitle1'}>
      {subtitle}
    </p>
  );
};
