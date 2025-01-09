import { Card, Divider } from 'antd';
import { Line } from '@ant-design/charts';
import {
  getLineSlider,
  getLineAnnotation,
  getMultiStepLine,
  getBarGroup,
} from '@/api/methods/overview';
import { LINE_SLIDER_CONFIG } from './const';

export default function Page() {
  const [chartData, setChartData] = useState<any>();
  const { lineSlider = [] } = chartData || {};
  const lineSliderConfig = {
    data: lineSlider,
    ...LINE_SLIDER_CONFIG,
  };

  const fetchChart = async () => {
    try {
      const resp = await Promise.allSettled([
        getLineSlider(),
        getLineAnnotation(),
        getMultiStepLine(),
        getBarGroup(),
      ]);
      const chartJsonData = resp.map((item: any) => item.value.data);
      setChartData({
        lineSlider: chartJsonData[0],
        lineAnnotation: chartJsonData[1],
        multiStepLine: chartJsonData[2],
      });
    } catch (error) {
      console.error('------>', error);
    }
  };
  useEffect(() => {
    fetchChart();
  }, []);

  return (
    <>
      <Card title="折线图" className="chart_card">
        <Divider />
        <Line {...lineSliderConfig} />
      </Card>
    </>
  );
}
