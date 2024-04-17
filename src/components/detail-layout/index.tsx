// import { FooterToolbar, PageLayout } from "@components";
import { Card } from 'antd';
import FooterToolbar from '../footer-toolbar';
import PageLayout from '../page-layout';

interface IDetailLayout {
  children: React.ReactNode;
  pageLayout: IPageLayout;
}

const DetailLayout = (props: IDetailLayout) => {
  const { children, pageLayout } = props || {};
  return (
    <PageLayout {...pageLayout}>
      <Card>
        <ul>{children}</ul>
      </Card>
      <FooterToolbar />
    </PageLayout>
  );
};

export default DetailLayout;
