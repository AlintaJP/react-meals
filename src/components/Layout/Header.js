import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals2.jpg";
import styles from "./Header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table fool of delicious food!" />
      </div>
    </>
  );
};

export default Header;
