import { FC, useEffect, useState } from "react";
import LogoPng from "/logo.png";

type ILogo = {
  collapsed: boolean;
};

const Logo: FC<ILogo> = (props) => {
  const { collapsed } = props || {};
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);
  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);
  return (
    <div className="logo_box">
      <img src={LogoPng} alt="logo" className="logo_img" />
      {!isCollapsed ? (
        <span className="logo_text">admin-system-template</span>
      ) : null}
    </div>
  );
};

export default Logo;
