import Image from "next/image";
import styles from "./style.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const { container, userImage, userName, expandIcon, flashIcon, flashIconIcon } = styles;

function UserMenu() {
  return (
    <div className={container}>
      <div className={userImage}>
        <Image
          src="/images/profile.png"
          height={40}
          width={40}
          alt="user image"
        />
      </div>
      <div className={userName}>
        <div>Samah Alsatary</div>
        <div className={flashIcon}>
          <FlashOnIcon className={flashIconIcon} />
          5000
        </div>
      </div>
      <div className={expandIcon}>
      <ExpandMoreIcon style={{ height: "40px", width: "40px" }} />
      </div>
    </div>
  );
}

export default UserMenu;
