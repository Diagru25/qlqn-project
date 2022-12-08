import styles from "./style.module.css";

const Breadcrumb = ({ title }) => {
  return (
    <>
      <div className={styles["breadcrumb-text"]}>{title}</div>
    </>
  );
};

export default Breadcrumb;
