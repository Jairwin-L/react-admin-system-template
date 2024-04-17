import { useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import style from '../index.module.less';
// TODO:import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import LogoPng from '/logo.png';

const items: MenuProps['items'] = [
  { label: '修改密码', key: 'CHANGE_PASSWORD' },
  { label: '退出', key: 'SIGN_OUT' },
];

const BreadcrumbItem = [
  {
    title: '首页',
  },
];

export default function Header(props: ILayoutRender.Header) {
  const navigate = useNavigate();
  const { onSetCollapsed, collapsed } = props || {};

  const onDropMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
    if (key === 'SIGN_OUT') {
      // TODO:
      navigate('/');
    }
    if (key === 'CHANGE_PASSWORD') {
      // TODO:
    }
  };

  return (
    <>
      <header className={style.header_container}>
        <div className={style.header_lf}>
          <div className={style.collapsed} onClick={() => onSetCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <Breadcrumb className={style.breadcrumb_box} items={BreadcrumbItem} />
        </div>
        <div className={style.header_ri}>
          <Dropdown menu={{ items, onClick: onDropMenu }} placement="bottom">
            <div className={style.header_avatar} onClick={(event) => event.preventDefault()}>
              <img src={LogoPng} alt="logo" className={style.user_avatar} />
              <span className={style.username}>Jairwin</span>
            </div>
          </Dropdown>
        </div>
      </header>
    </>
  );
}
