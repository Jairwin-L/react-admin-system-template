import { useState } from 'react';
import { Layout, Input, Form, Button } from 'antd';
import { Store } from 'antd/es/form/interface';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = (values: Store) => {
    console.log(`values----->：`, values);
    setLoading(true);
    try {
      setLoading(false);
      navigate('/main');
    } catch (error) {
      console.error('login', error);
    }
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
