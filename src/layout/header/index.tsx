import { type FC} from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

// TODO:ts需要调整
const Header: FC<any> = (props) => {
  const { onSetCollapsed, collapsed } = props || {};

  return (
    <>
      <header className="header_container">
        <div className="header_lf">
          <div className="collapsed" onClick={() => onSetCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <Breadcrumb className="breadcrumb_box">
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="header_ri">
					header_ri
        </div>
      </header>
    </>
  );
};

export default Header;
