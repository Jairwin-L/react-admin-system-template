import { useIntl } from 'react-intl';
import css from './index.module.less';

export default function Main() {
  const { formatMessage } = useIntl();
  const text = 'hello world';
  const text1 = 'test';
  useEffect(() => {
    console.log('2----->：', 2);
    return () => {
      console.log('3----->：', 3);
    };
  }, []);
  return (
    <div className={css.welcome}>
      主页,
      {formatMessage({ id: 'welcome' }, { text, text1 })}
    </div>
  );
}
