import {
  IoLogoPlaystation,
  IoLogoXbox,
  IoLogoWindows,
  IoLogoApple,
  IoLogoAndroid,
} from "react-icons/io";
import { FaAppStoreIos, FaLinux } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IconType } from "react-icons";

const platformIcons: { [key: string]: IconType } = {
  pc: IoLogoWindows,
  playstation: IoLogoPlaystation,
  xbox: IoLogoXbox,
  ios: FaAppStoreIos,
  android: IoLogoAndroid,
  linux: FaLinux,
  nintendo: BsNintendoSwitch,
  "apple macintosh": IoLogoApple,
};

export default platformIcons;
