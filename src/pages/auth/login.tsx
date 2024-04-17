import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Layout } from 'antd';
import { useState } from 'react';
import { login } from '@/api/modules/auth';
import './index.less';

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
    <Layout className="login_container animated fadeIn">
      <div className="login_main">
        <div className="login_form">
          <div className="site_logo">
            <img src={''} alt="" />
          </div>
          <h3>react-admin-system-template</h3>
          <Form name="normal_login" onFinish={onFinish}>
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
              <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
              <Input
                type="password"
                size="large"
                placeholder="请输入密码"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="login_btn"
                loading={loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
