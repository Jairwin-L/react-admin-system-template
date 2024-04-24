import Exception from '../exception';
import PageLoading from '../page-loading';

export default function PageLayout(props: IPageLayout) {
  const { success = true, loading = false, children, onRefresh } = props || {};
  if (loading && success) {
    return <PageLoading />;
  }
  if (!success) {
    return <Exception onClick={onRefresh} />;
  }
  return <>{children}</>;
}
