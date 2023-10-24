import styles from "./_listTile.module.scss";

const ListTile = ({ id, title, description, price }) => {
  return (
    <li key={id} className={styles.listItem}>
      <h1 className={styles.productName}>{title}</h1>
      <h2 className={styles.subHeader}>{description}</h2>
      <p className={styles.productPrice}>Price: {price} -euro</p>
    </li>
  );
};

export default ListTile;
