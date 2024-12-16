'use client';

import Image from 'next/image';
import ImageSelector from '../images/ImageTransition.svg';
import DetailImage from '../images/DetailPhoto.svg';
import styles from '../styles/hero.module.css';
import { Inter, Playfair_Display } from 'next/font/google';

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '500', '400'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        <h1 className={playFair.className} id={styles.slv}>
          Sea La Vie
        </h1>
        <p className={inter.className} id={styles.alm}>
          Alibaug, Maharashtra
        </p>
        <div className={styles.smallLogo}></div>
      </div>
      <Image
        src={ImageSelector}
        alt='Menu to check next photo'
        className={styles.menu}
      />
      <Image
        src={DetailImage}
        alt='Smaller house picture'
        className={styles.detail}
      />
    </div>
  );
};
