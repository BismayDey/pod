import styles from "../styles/aboutIconsList.module.css";
import Image from "next/image";
import ellipse from "../images/Ellipse.svg";
import house from "../images/House.svg";
import people from "../images/Group.svg";
import bed from "../images/Bed 2.svg";
import paw from "../images/Paw.svg";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const AboutIconsList = () => {
  return (
    <ol className={`${styles.iconsContainer} ${inter.className}`}>
      <li className={`${styles.iconDiv} ${inter.className}`}>
        <Image src={house} alt="House Icon" />
        <span>Entire Villa</span>
      </li>
      <Image src={ellipse} alt="Ellipse icon" />
      <li className={styles.iconDiv}>
        <Image src={people} alt="Icon with two people" />
        <span>6-12 Guests</span>
      </li>
      <Image src={ellipse} alt="Ellipse icon" />
      <li className={styles.iconDiv}>
        <Image src={bed} alt="Bed icon" />
        <span>8 Bedrooms</span>
      </li>
      <Image src={ellipse} alt="Ellipse icon" />
      <li className={styles.iconDiv}>
        <Image src={paw} alt="Paw icon" />
        <span>Pet-Friendly</span>
      </li>
    </ol>
  );
};
