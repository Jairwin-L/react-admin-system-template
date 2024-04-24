import { Form } from 'antd';
import { useEffect, useState } from 'react';
import { show, store } from '@/api/modules/biz';
import { FormLayout } from '@/components';
import formItemConfig from './form-item-config';

export default function Add() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [model, setModel] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  // form提交配置
  const onFinish = async (values: IQueryBiz.StoreParam): Promise<void> => {
    console.log('values----->：', values);
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
      // @ts-ignore
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
      {formItemConfig({ model }).map((item) => {
        return (
          <Form.Item key={item.name} label={item.label} name={item.name} colon rules={item.rules}>
            {item?.component ? item.component : null}
          </Form.Item>
        );
      })}
    </FormLayout>
  );
}
