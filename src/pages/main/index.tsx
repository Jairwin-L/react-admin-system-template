import { Card } from '@/components';
import css from './index.module.less';

export default function Main() {
  useEffect(() => {
    console.log('2----->：', 2);
    return () => {
      console.log('3----->：', 3);
    };
  }, []);
  return <Card className={css.welcome}>主页,</Card>;
}
