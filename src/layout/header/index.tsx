import { type FC } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import LogoPng from '/logo.png';

const items: MenuProps['items'] = [
  { label: '修改密码', key: 'CHANGE_PASSWORD' },
  { label: '退出', key: 'SIGN_OUT' },
];

const Header: FC<ILayoutRender.Header> = (props) => {
  const { onSetCollapsed, collapsed } = props || {};

  const onDropMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
    if (key === 'SIGN_OUT') {
      // TODO:
    }
    if (key === 'CHANGE_PASSWORD') {
      // TODO:
    }
  };

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
          <Dropdown menu={{ items, onClick: onDropMenu }} placement="bottom">
            <div className="header_avatar" onClick={(event) => event.preventDefault()}>
              <img src={LogoPng} alt="logo" className="user_avatar" />
              <span className="username">Jairwin</span>
            </div>
          </Dropdown>
        </div>
      </header>
    </>
  );
};

export default Header;
