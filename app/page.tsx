"use client";
import styles from "./styles/_home.module.scss";
import getProducts from "../getMainPage";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Data from "./componets/interfaces";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        setData(productsData);
      } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section>
        <ul className={styles.list}>
          {data && data.products ? (
            data.products.map((product) => (
              <li key={product.id} className={styles.listItem}>
                <h1 className={styles.productName}>{product.title}</h1>
                <h2 className={styles.subHeader}>{product.description}</h2>
                <p className={styles.productPrice}>
                  Price: {product.price} -euro
                </p>{" "}
                <p className={styles.productDescription}>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  deserunt ut cumque cum autem rerum dolor debitis placeat
                  commodi ducimus ea velit perspiciatis, corporis molestias
                  dolore. Repellendus ipsa est esse, provident, ea autem
                  recusandae et suscipit nesciunt cupiditate non explicabo
                  placeat iste maiores quos eius dicta quam error adipisci,
                  distinctio quidem consectetur! Voluptatibus nisi ab doloribus
                  debitis. Adipisci, at optio! Possimus, rerum sit earum iure
                  animi sequi quo odio sed ipsam vitae deserunt temporibus optio
                  doloremque voluptate expedita ipsum culpa quibusdam delectus.
                  Earum nisi animi, at consequatur porro a quos, qui veniam
                  velit voluptatibus accusamus harum ad nulla nesciunt
                  repellendus placeat, similique corporis fugiat possimus
                  necessitatibus voluptas adipisci inventore quae? Eligendi
                  doloribus quod nisi neque officiis ipsa reiciendis, sit
                  consequatur?
                </p>
                <div className={styles.productImages}>
                  {product.images.map((image) => (
                    <p key={product.id}>
                      <Link href={`./pages/${product.category}`}>
                        <Image
                          className={styles.imagesSize}
                          src={image}
                          alt={product.title}
                          width="430"
                          height="390"
                        />
                      </Link>
                    </p>
                  ))}
                </div>
              </li>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </section>
    </main>
  );
}
