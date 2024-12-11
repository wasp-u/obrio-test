import Image from 'next/image';
import WhiteLogo from './../../../public/logo_white.svg';
import BlackLogo from './../../../public/logo_black.svg';

import styles from './Header.module.css';
import { BackButton } from '../BackButton';
import { ScreenType } from '@/types/Question';

interface Props {
  screenType?: ScreenType;
}

export const Header = ({ screenType = 'default' }: Props) => {
  return (
    <header className={styles.wrapper}>
      <BackButton variant={screenType === 'info' ? 'light' : 'dark'} />

      <div className={styles.logo}>
        <Image src={screenType === 'info' ? WhiteLogo : BlackLogo} alt='logo' />
      </div>
    </header>
  );
};
