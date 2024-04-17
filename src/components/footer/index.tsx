import ExternalLinkJump from '../link-jump/external-link-jump';
import style from './index.module.less';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <ExternalLinkJump href="https://react-admin-system-template.vercel.app">
        react-admin-system-template
      </ExternalLinkJump>
      By
      <ExternalLinkJump href="https://www.yuque.com/jairwin/blog">Jairwin</ExternalLinkJump>
    </footer>
  );
}
