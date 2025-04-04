import { Form } from 'antd';
import dayjs from 'dayjs';
import { useParams } from 'react-router';
import { show, update } from '@/api/methods/list';
import { FormLayout, PageLayout } from '@/components';
import FormItemConfig from './form-item-config';

export default function Page() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [model, setModel] = useState<IQueryBiz.ModelResp | undefined>({
    date: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [pageStatus, setPageStatus] = useState<any>({
    loading: true,
    success: true,
  });

  const onFinish = async (values: IQueryBiz.StoreParam) => {
    setLoading(true);
    try {
      const { success } = await update(values);
      console.log('values----->：', values);
      setLoading(false);
      if (!success) return;
      navigate(-1);
    } catch (error) {
      console.error(`error----->：`, error);
    }
    setLoading(false);
  };
  const fetchModel = async () => {
    try {
      const { data, success } = await show({ id: Number(id) });
      setPageStatus({
        loading: false,
        success,
      });
      setModel(data);
      form.setFieldsValue({
        ...data,
        date: dayjs(data?.date) ?? null,
      });
    } catch (error) {
      console.error(`error----->：`, error);
    }
  };
  const pageLayout = {
    ...pageStatus,
    onRefresh: () => {
      setPageStatus({
        loading: true,
        success: true,
      });
      fetchModel();
    },
  };
  useEffect(() => {
    fetchModel();
  }, []);

  return (
    <PageLayout {...pageLayout}>
      <FormLayout<IQueryBiz.StoreParam> form={form} onFinish={onFinish} loading={loading}>
        {FormItemConfig({ model }).map((item) => {
          return (
            <Form.Item key={item.name} label={item.label} name={item.name} colon rules={item.rules}>
              {item?.component ? item.component : null}
            </Form.Item>
          );
        })}
      </FormLayout>
    </PageLayout>
  );
}
