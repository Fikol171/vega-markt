"use client";
import styles from "./styles/_home.module.scss";
import getProducts from "../getMainPage";
import { useEffect, useState } from "react";
import Data from "./componets/interfaces";
import Link from "next/link";
import ListTile from "./componets/listTile";
import ImagesTile from "./componets/imagesTile";

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

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
              <>
                <div className={styles.container}>
                  <ListTile
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                  />
                  <p className={styles.productDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet fuga laudantium est itaque natus, quaerat nihil!
                    Beatae sit ullam commodi qui harum mollitia illo porro quas
                    expedita provident architecto nulla magnam quae consequatur
                    rem praesentium corrupti repellat, quod quis obcaecati
                    distinctio voluptas magni? Eum accusamus illum
                    necessitatibus eaque velit explicabo.
                  </p>
                  <div className={styles.productImages}>
                    {product.images.map((image) => (
                      <p key={product.id}>
                        <Link href={`./pages/${product.category}`}>
                          <ImagesTile image={image} title={product.title} />
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              </>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </section>
    </main>
  );
}
