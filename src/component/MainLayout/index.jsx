import Navbar from "../Navbar";
import styles from "./style.module.css";

const { main, mainContainer } = styles;
const MainLayout = ({ children }) => {
  return (
    <div className={mainContainer}>
      <Navbar />
      <main className={main}>{children}</main>
    </div>
  );
};
export default MainLayout;
