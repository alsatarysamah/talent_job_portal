import styles from "../../../styles/Home.module.css";
import Navbar from "../Navbar";

const { main } = styles;
const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <main className={main}>{children}</main>
    </>
  );
};
export default MainLayout;
