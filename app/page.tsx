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
  }, [pathname]);
  console.log(pathname);
  return (
    <main>
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
              <h1
                style={{
                  color: "#2c3531",
                  margin: "10px 25px ",
                  fontWeight: "900",
                  fontSize: "38px",
                }}
              >
                {product.title}
              </h1>
              <h2 style={{ color: "#2c3531", margin: "10px 25px " }}>
                {product.description}
              </h2>
              <p
                style={{
                  color: "#d9b08c",
                  lineHeight: "1.4",
                  fontWeight: "bold",
                  fontSize: "26px",
                  margin: "10px 25px ",
                }}
              >
                Price: {product.price} -euro
              </p>{" "}
              <p
                style={{
                  display: "flex",
                  maxWidth: "1400px",
                  padding: "20px",
                  backgroundColor: "#2c3531",
                  margin: "10px 25px ",
                  borderRadius: "15px",
                  color: "#d9b08c",
                  lineHeight: "1.4",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                deserunt ut cumque cum autem rerum dolor debitis placeat commodi
                ducimus ea velit perspiciatis, corporis molestias dolore.
                Repellendus ipsa est esse, provident, ea autem recusandae et
                suscipit nesciunt cupiditate non explicabo placeat iste maiores
                quos eius dicta quam error adipisci, distinctio quidem
                consectetur! Voluptatibus nisi ab doloribus debitis. Adipisci,
                at optio! Possimus, rerum sit earum iure animi sequi quo odio
                sed ipsam vitae deserunt temporibus optio doloremque voluptate
                expedita ipsum culpa quibusdam delectus. Earum nisi animi, at
                consequatur porro a quos, qui veniam velit voluptatibus
                accusamus harum ad nulla nesciunt repellendus placeat, similique
                corporis fugiat possimus necessitatibus voluptas adipisci
                inventore quae? Eligendi doloribus quod nisi neque officiis ipsa
                reiciendis, sit consequatur? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quis id quaerat ea quidem! Quam
                minima reprehenderit dolores. Sed doloremque adipisci hic
                perspiciatis aspernatur, consequuntur officiis, explicabo
                eveniet ipsa veniam aperiam necessitatibus reiciendis nemo
                laborum quo porro sequi dicta. Cum, enim!
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  paddingBottom: "25px",
                }}
              >
                {product.images.map((image) => (
                  <p key={product.id}>
                    <Link href={`./pages/${product.category}`}>
                      <Image
                        src={image}
                        alt={product.title}
                        width="430"
                        height="390"
                        style={{ margin: "30px" }}
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
    </main>
  );
}
