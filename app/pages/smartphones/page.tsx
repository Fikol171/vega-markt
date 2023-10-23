"use client";
import { useEffect, useState } from "react";
import styles from "./smartphones.module.scss";
import { usePathname } from "next/navigation";
import getProducts from "@/getData";
import Image from "next/image";
import Data from "@/app/componets/interfaces";

const Smartphones = () => {
  const [data, setData] = useState<Data | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts(pathname.slice(7));
        setData(productsData);
      } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
      }
    };

    fetchData();
  }, [pathname]);

  return (
    <div>
      <ul className="list">
        {data && data.products ? (
          data.products.map((product) => (
            <li
              key={product.id}
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "80vw",
                flexWrap: "wrap",
              }}
            >
              <h1>{product.title}</h1>
              <p>Price:{product.price}-Euro</p>
              <p>Producent: {product.brand}</p>
              <h2>{product.description}</h2>
              <div className="imagesPosition">
                {product.images.map((image) => (
                  <p key={product.title}>
                    <Image
                      src={image}
                      alt={product.title}
                      width="300"
                      height="350"
                      style={{ margin: "15px" }}
                    />
                  </p>
                ))}
              </div>
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default Smartphones;
