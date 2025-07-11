import { useNavigate } from 'react-router';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { easySessionStorage } from '@/utils';
import css from './index.module.less';
// eslint-disable-next-line import/no-unresolved
import LogoPng from '/logo.png';

const items: MenuProps['items'] = [
  { label: '修改密码', key: 'CHANGE_PASSWORD' },
  { label: '退出', key: 'SIGN_OUT' },
];

export default function Header() {
  const navigate = useNavigate();
  const onDropMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
    if (key === 'SIGN_OUT') {
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
      <header className={css['header-container']}>
        <span />
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
