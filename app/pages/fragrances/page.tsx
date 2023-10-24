"use client";

import { usePathname } from "next/navigation";
import getProducts from "@/getData";
import Image from "next/image";
import Data from "@/app/componets/interfaces";
import { useEffect, useState } from "react";

const Groceries = () => {
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
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyleType: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
              <h2>{product.description}</h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  paddingBottom: "25px",
                }}
              >
                {product.images.map((image) => (
                  <p key={product.title}>
                    <Image
                      src={image}
                      alt={product.title}
                      width="300"
                      height="350"
                      style={{ margin: "30px" }}
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

export default Groceries;
