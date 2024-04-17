import { login } from '@/api/modules/auth';
import { Footer } from '@/components';
import { APP_NAME } from '@/constant/app';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import css from './index.module.less';
// TODO:import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import LogoPng from '/logo.png';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: IQueryAuth.Param) => {
    console.log('values----->：', values);
    setLoading(true);
    try {
      const { success = false } = await login(values);
      setLoading(false);
      if (!success) return;
      navigate('/main');
    } catch (error) {
      console.error(`------>`, error);
    }
    setLoading(false);
  };

  return (
    <div className={css['login-container']}>
      <div className={css['login-form']}>
        <div className={css['site-name']}>
          <img src={LogoPng} alt="logo" className={css['logo-img']} />
          <h3>{APP_NAME}</h3>
        </div>
        <Form name="normal_login" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
            extra="admin"
          >
            <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
            extra="123456"
          >
            <Input
              type="password"
              size="large"
              placeholder="请输入密码"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
