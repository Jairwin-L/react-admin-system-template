import { Button, Form } from 'antd';
import FooterToolbar from '../footer-toolbar';
import css from './index.module.less';

export default function FormLayout<F>(props: IFormLayout<F>) {
  const { form, onFinish, children, loading } = props;
  return (
    <div className={css['form-layout']}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        {children}
      </Form>
      <FooterToolbar loading={loading}>
        <Button loading={loading} type="primary" onClick={() => form.submit()}>
          确定
        </Button>
      </FooterToolbar>
    </div>
  );
}
