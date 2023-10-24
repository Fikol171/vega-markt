import Image from "next/image";
import styles from "./_images.module.scss";

function ImagesTile({ image, title }) {
  return (
    <Image
      className={styles.imagesSize}
      src={image}
      alt={title}
      width="430"
      height="390"
    />
  );
}

export default ImagesTile;
