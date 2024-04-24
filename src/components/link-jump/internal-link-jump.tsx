import clsx from 'clsx';
import css from './index.module.less';

export default function InternalLinkJump(props: IInternalLinkJump) {
  const { link, text, onClick, className } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const onInternalLinkJump = () => {
    if (link === location.pathname) return;
    if (onClick) {
      onClick();
    }
    navigate(link);
  };

  if (!text && !link) return null;

  return (
    <span className={clsx(css['internal-link-jump'], className)} onClick={onInternalLinkJump}>
      {text}
    </span>
  );
}
