import { Form } from 'antd';
import type { Store } from 'antd/es/form/interface';
import { useEffect, useState } from 'react';
import { FormLayout } from '@/components';
import { show, store } from '@/api/modules/biz';
import { formItemConfig } from './form-item-config';

export default function Add() {
  const [form] = Form.useForm();
  const [model, setModel] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  // form提交配置
  const onFinish = async (values: Store): Promise<void> => {
    console.log('values----->：', values);
    try {
      setLoading(true);
      await store(values);
      setLoading(false);
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
