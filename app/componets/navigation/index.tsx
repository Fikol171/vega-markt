"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./_navigation.module.scss";
import { useState } from "react";

const Navigation = () => {
  const [close, setClose] = useState(false);

  const toggleNavigation = () => {
    setClose(!close);
  };
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            className={styles.navLogo}
            src="/logo.png"
            alt="vegaIcon"
            width="100"
            height="100"
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
              src={close ? "/icon-close.svg" : "/icon-burger.svg"}
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
        <ul className={close ? styles.navMobile : styles.navList}>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              onClick={() => {
                setClose(false);
              }}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              onClick={() => {
                setClose(false);
              }}
              href="../../pages/smartphones"
            >
              Smartphones
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              onClick={() => {
                setClose(false);
              }}
              href="../../pages/laptops"
            >
              Laptops
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              onClick={() => {
                setClose(false);
              }}
              href="../../pages/fragrances"
            >
              Fragrances
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              onClick={() => {
                setClose(false);
              }}
              href="../../pages/home-decoration"
            >
              Fasion
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              onClick={() => {
                setClose(false);
              }}
              href="../../pages/skincare"
            >
              Skincare
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
