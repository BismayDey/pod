import Image from "next/image";
import styles from "../styles/header.module.css";
import { Button } from "./button";
import Logo from "../images/Logo.svg";
import Logo2 from "../images/Logo2.svg";
import Tel from "../images/Tel.svg";
import LogoIcon from "../images/Logo-icon.svg";
import Forget from "../images/Forget.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.div}>
        <Image
          src={Logo}
          alt="XSERIES written in gold"
          height={42.65}
          width={183.51}
        />
        <input
          type="search"
          className={styles.input}
          placeholder="search for location, villa, facilities..."
        />
      </div>
      <div className={styles.div}>
        <Image src={Logo2} alt="Flower like logo in gold with white text" />
        <Image src={Tel} alt="Contact number" />
        <Button text="Login" disabled={false} />
      </div>
      <Image src={LogoIcon} alt="Golden logo icon" className={styles.image} />
      <Image
        src={Forget}
        alt="Forget icon"
        height={24}
        width={24}
        className={styles.image}
      />
    </header>
  );
};
