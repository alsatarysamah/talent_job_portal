import styles from "../styles/Home.module.css";
import MainLayout from "../src/component/MainLayout";

const { mainContainer } = styles;
export default function Home() {
  return (
    <div className={mainContainer}>
      <MainLayout />
    </div>
  );
}
