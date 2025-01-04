import { useNavigate } from 'react-router';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import clsx from 'clsx';
import { easySessionStorage } from '@/utils';
import css from './index.module.less';
// eslint-disable-next-line import/no-unresolved
import LogoPng from '/logo.png';

const items: MenuProps['items'] = [
  { label: '修改密码', key: 'CHANGE_PASSWORD' },
  { label: '退出', key: 'SIGN_OUT' },
];

// const BreadcrumbItem = [
//   {
//     title: '首页',
//   },
// ];

export default function Header(props: ILayoutRender.Header | any) {
  const navigate = useNavigate();
  const { onSetCollapsed, collapsed } = props || {};
  const onDropMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
    if (key === 'SIGN_OUT') {
      // TODO:
      easySessionStorage.clear();
      navigate('/login', {
        replace: true,
      });
    }
    if (key === 'CHANGE_PASSWORD') {
      // TODO:
    }
  };

  return (
    <>
      <header
        className={clsx(css['header-container'], {
          [css['header-container-collapsed']]: collapsed,
        })}
      >
        <div className={css['header-lf']}>
          <div className={css.collapsed} onClick={() => onSetCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          {/* <Breadcrumb className={css.breadcrumb_box} items={BreadcrumbItem} /> */}
        </div>
        <div className={css['header-ri']}>
          <Dropdown menu={{ items, onClick: onDropMenu }} placement="bottom">
            <div className={css['header-avatar']} onClick={(event) => event.preventDefault()}>
              <img src={LogoPng} alt="logo" className={css['user-avatar']} />
              <span className={css.username}>admin</span>
            </div>
          </Dropdown>
        </div>
      </header>
    </>
  );
}
