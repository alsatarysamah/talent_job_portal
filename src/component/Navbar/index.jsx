import Image from "next/image";
import styles from "./style.module.css";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { useRouter } from "next/router";
import UserMenu from "../UserMenu";
const { container, leftSide, logo, job } = styles;
function Navbar({ setIsJobClicked }) {
  const router = useRouter();
  const handleJobClick = () => {
    setIsJobClicked(true);
  };
  const handleTalentClick = () => {
    setIsJobClicked(false);
  };
  return (
    <div className={container}>
      <div className={leftSide}>
        <div className={logo}>
          <Image src="/images/logo.png" height={44} width={44} alt="Logo" />
        </div>
        <div className={job} onClick={handleJobClick}>
          <LocalMallOutlinedIcon />
          <div>Jobs</div>
        </div>
        <div className={job} onClick={handleTalentClick}>
          <BadgeOutlinedIcon />

          <div> Talent pool</div>
        </div>
      </div>
      <div>
        <UserMenu />
      </div>
    </div>
  );
}

export default Navbar;
