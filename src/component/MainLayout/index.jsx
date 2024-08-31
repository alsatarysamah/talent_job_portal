import { useState } from "react";
import Navbar from "../Navbar";
import styles from "./style.module.css";
import Job from "../Job";

const { main, mainContainer } = styles;
const MainLayout = ({ children }) => {
  const [isJobClicked, setIsJobClicked] = useState(true);
  return (
    <div className={mainContainer}>
      <Navbar setIsJobClicked={setIsJobClicked} />
      <main className={main}>{children}</main>
      {isJobClicked && <Job />}
    </div>
  );
};
export default MainLayout;
