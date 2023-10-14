import Image from "next/image";
import Link from "next/link";
import styles from "./_navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Image
        className={styles["nav__logo"]}
        src="/mainLogo.png"
        alt="vegaIcon"
        width="120"
        height="90"
      />
      <ul className={styles["nav__ul"]}>
        <li className={styles["nav__ul--li"]}>
          <Link className={styles["nav__link"]} href="/">
            Home
          </Link>
        </li>
        <li className={styles["nav__ul--li"]}>
          <Link className={styles["nav__link"]} href="/">
            Smartphones
          </Link>
        </li>
        <li className={styles["nav__ul--li"]}>
          <Link className={styles["nav__link"]} href="/">
            Laptops
          </Link>
        </li>

        <li className={styles["nav__ul--li"]}>
          <Link className={styles["nav__link"]} href="/">
            Groceries
          </Link>
        </li>
        <li className={styles["nav__ul--li"]}>
          <Link className={styles["nav__link"]} href="/">
            Fasion
          </Link>
        </li>
        <li className={styles["nav__ul--li"]}>
          <Link className={styles["nav__link"]} href="/">
            Health
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
