import { Form } from 'antd';
import { show, store } from '@/api/methods/list';
import { FormLayout } from '@/components';
import FormItemConfig from './form-item-config';

export default function Page() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [model, setModel] = useState<IQueryBiz.ModelResp>();
  const [loading, setLoading] = useState<boolean>(false);
  // form提交配置
  const onFinish = async (values: IQueryBiz.StoreParam): Promise<void> => {
    try {
      setLoading(true);
      const { success } = await store(values);
      setLoading(false);
      if (!success) return;
      navigate(-1);
    } catch (error) {
      console.log(`error----->：`, error);
    }
  };
  const fetchModel = async () => {
    try {
      const { data } = await show({ id: 1 });
      setModel(data);
    } catch (error) {
      console.error(`error----->：`, error);
    }
  };
  useEffect(() => {
    fetchModel();
  }, []);

  return (
    <FormLayout form={form} onFinish={onFinish} loading={loading}>
      {FormItemConfig({ model }).map((item) => {
        return (
          <Form.Item key={item.name} label={item.label} name={item.name} colon rules={item.rules}>
            {item?.component ? item.component : null}
          </Form.Item>
        );
      })}
    </FormLayout>
  );
}
