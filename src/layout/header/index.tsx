import { useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { easyLocalStorage, easySessionStorage } from '@/utils';
import { APP_LOCALE_LANGUAGE_LABEL } from '@/languages';
import { LanguageContext } from '@/hooks';
import css from '../index.module.less';
// eslint-disable-next-line import/no-unresolved
import LogoPng from '/logo.png';

const items: MenuProps['items'] = [
  { label: '修改密码', key: 'CHANGE_PASSWORD' },
  { label: '退出', key: 'SIGN_OUT' },
];

const LOCALE_ITEMS: MenuProps['items'] = [
  { label: '中文', key: 'zh' },
  { label: '英文', key: 'en' },
  { label: '法语', key: 'fr' },
];

// const BreadcrumbItem = [
//   {
//     title: '首页',
//   },
// ];

export default function Header(props: ILayoutRender.Header | any) {
  const navigate = useNavigate();
  const { onSetCollapsed, collapsed } = props || {};
  const languageContext = useContext(LanguageContext);
  const { language, setLanguage } = languageContext;
  const onDropMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
    if (key === 'SIGN_OUT') {
      // TODO:
      easySessionStorage.clear();
      navigate('/login');
    }
    if (key === 'CHANGE_PASSWORD') {
      // TODO:
    }
  };

  const onLocaleDropMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
    easyLocalStorage.setItem('language', key);
    setLanguage(key);
  };

  return (
    <>
      <header className={css.header_container}>
        <div className={css.header_lf}>
          <div className={css.collapsed} onClick={() => onSetCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          {/* <Breadcrumb className={css.breadcrumb_box} items={BreadcrumbItem} /> */}
        </div>
        <div className={css.header_ri}>
          <Dropdown
            menu={{
              items: LOCALE_ITEMS,
              onClick: onLocaleDropMenu,
              selectedKeys: [`${language}`],
            }}
            placement="bottom"
          >
            <span className={css['drop-menu']}>{APP_LOCALE_LANGUAGE_LABEL[language]}</span>
          </Dropdown>
          <Dropdown menu={{ items, onClick: onDropMenu }} placement="bottom">
            <div className={css.header_avatar} onClick={(event) => event.preventDefault()}>
              <img src={LogoPng} alt="logo" className={css.user_avatar} />
              <span className={css.username}>Jairwin</span>
            </div>
          </Dropdown>
        </div>
      </header>
    </>
  );
}
