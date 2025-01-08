import { Line } from '@ant-design/charts';
import { Card } from '@/components';
import css from './index.module.less';

export default function Main() {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
  };
  useEffect(() => {
    console.log('2----->：', 2);
    return () => {
      console.log('3----->：', 3);
    };
  }, []);
  return (
    <>
      <Card className={css.welcome}>主页,</Card>
      <Card>
        <Line {...config} />
      </Card>
    </>
  );
}
