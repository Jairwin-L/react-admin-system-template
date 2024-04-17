import Exception from '../exception';
import PageLoading from '../page-loading';

const PageLayout = (props: IPageLayout): JSX.Element => {
  const { success = true, loading = false, children, onRefresh } = props || {};
  if (loading && success) {
    return <PageLoading />;
  }
  if (!success) {
    return <Exception onClick={onRefresh} />;
  }
  return <>{children}</>;
};

export default PageLayout;
