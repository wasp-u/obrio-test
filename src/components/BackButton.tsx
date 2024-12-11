'use client';

import Image from 'next/image';
import LightChevron from './../../public/light_chevron.svg';
import DarkChevron from './../../public/dark_chevron.svg';
import { useRouter } from 'next/navigation';

interface Props {
  variant: 'dark' | 'light';
}

export const BackButton = ({ variant }: Props) => {
  const isDark = variant === 'dark';
  const router = useRouter();

  return (
    <Image
      src={isDark ? DarkChevron : LightChevron}
      alt='Chevron'
      onClick={() => router.back()}
    />
  );
};
