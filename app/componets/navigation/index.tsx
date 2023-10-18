"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./_navigation.module.scss";
import { useState } from "react";

const Navigation = () => {
  const [close, setClose] = useState(true);

  const toggleNavigation = () => {
    setClose(!close);
  };
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            className={styles["nav__logo"]}
            src="/mainLogo.png"
            alt="vegaIcon"
            width="120"
            height="90"
          />
        </Link>
        <div>
          <button
            className={styles.navButton}
            onClick={() => {
              toggleNavigation();
            }}
          >
            <Image
              src={close ? "/icon-close.svg" : "/icon-hamburger.svg"}
              alt="button"
              width="18"
              height="15"
              style={{ color: "black" }}
            />
          </button>
          <label>
            <input
              className={styles.navInput}
              type="text"
              placeholder="What are You seraching?"
            ></input>{" "}
          </label>
        </div>
        <ul className={close ? styles["nav__ul"] : styles["nav__mobile"]}>
          <li className={styles["nav__ul--li"]}>
            <Link
              className={styles["nav__link"]}
              onClick={() => {
                setClose(!close);
              }}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className={styles["nav__ul--li"]}>
            <Link
              className={styles["nav__link"]}
              onClick={() => {
                setClose(!close);
              }}
              href="../../pages/smartphones"
            >
              Smartphones
            </Link>
          </li>
          <li className={styles["nav__ul--li"]}>
            <Link
              className={styles["nav__link"]}
              onClick={() => {
                setClose(!close);
              }}
              href="../../pages/laptops"
            >
              Laptops
            </Link>
          </li>

          <li className={styles["nav__ul--li"]}>
            <Link
              className={styles["nav__link"]}
              onClick={() => {
                setClose(!close);
              }}
              href="../../pages/groceries"
            >
              Groceries
            </Link>
          </li>
          <li className={styles["nav__ul--li"]}>
            <Link
              className={styles["nav__link"]}
              onClick={() => {
                setClose(!close);
              }}
              href="../../pages/fasion"
            >
              Fasion
            </Link>
          </li>
          <li className={styles["nav__ul--li"]}>
            <Link
              className={styles["nav__link"]}
              onClick={() => {
                setClose(!close);
              }}
              href="../../pages/health"
            >
              Health
            </Link>
          </li>
        </ul>
        <div className={styles.navButtons}>
          <button className={styles.navLoginButton}>Login</button>
          <div className={styles.buttonContainer}>
            <button className={styles.cartButton}>🛒</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
