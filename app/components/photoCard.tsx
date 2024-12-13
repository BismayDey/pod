import styles from "../styles/photoCard.module.css";
import Image from "next/image";
import photo from "../images/House-photo.svg";
import ellipse from "../images/Ellipse.svg";

export const PhotoCard = () => {
  return (
    <li className={styles.card}>
      <Image src={photo} alt="house's picture" />
      <p>
        Vinay <Image src={ellipse} alt="circle icon" /> Sep 03, 2023
      </p>
    </li>
  );
};
