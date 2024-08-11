import { APP_NAME } from '@/constants/app';
import ExternalLinkJump from '../link-jump/external-link-jump';
import css from './index.module.less';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <ExternalLinkJump href="https://react-admin-system-template.jairwin.cn">
        {APP_NAME}
      </ExternalLinkJump>
      By
      <ExternalLinkJump href="https://www.yuque.com/jairwin/blog">Jairwin</ExternalLinkJump>
    </footer>
  );
}
