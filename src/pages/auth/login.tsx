import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { debounce } from 'lodash-es';
import { login } from '@/api/methods/auth';
import { Footer } from '@/components';
import { APP_NAME } from '@/constants/app';
import css from './index.module.less';
// TODO:import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import LogoPng from '/logo.png';

export default function Page() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = debounce(async (values: IQueryAuth.Param) => {
    console.log('123----->：', 123);
    setLoading(true);
    try {
      const resp = await login(values);
      // @ts-ignore
      const { success } = resp;
      setLoading(false);
      if (!success) return;
      navigate('/main');
    } catch (error) {
      console.error(`------>`, error);
    }
    setLoading(false);
  }, 300);

  return (
    <div className={css['login-container']}>
      <div className={css['login-form']}>
        <div className={css['site-name']}>
          <img src={LogoPng} alt="logo" className={css['logo-img']} />
          <h3>{APP_NAME}</h3>
        </div>
        <Form onFinish={onFinish} form={form}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
            extra="admin"
          >
            <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
            extra="123456"
          >
            <Input type="password" placeholder="请输入密码" prefix={<LockOutlined />} />
          </Form.Item>
        </Form>
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={loading}
          onClick={() => form.submit()}
        >
          登录
        </Button>
      </div>
      <Footer />
    </div>
  );
}
