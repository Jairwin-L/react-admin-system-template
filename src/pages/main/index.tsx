import css from './index.module.less';

export default function Main() {
  console.log('1----->：', 1);
  useEffect(() => {
    console.log('2----->：', 2);
    return () => {
      console.log('3----->：', 3);
    };
  }, []);
  return <div className={css.welcome}>主页</div>;
}
