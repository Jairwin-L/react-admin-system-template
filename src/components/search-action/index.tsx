import { Divider, message, Popconfirm } from 'antd';
import { destroy } from '@/api/modules/biz';
import css from './index.module.less';

export default function SearchAction<T>(props: IConditionSearch.SearchAction<T>) {
  const navigate = useNavigate();
  const { apiType, item, onDelRefetch } = props || {};
  const onDelete = async () => {
    try {
      const { success } = await destroy({
        apiType,
        id: (item as T & { id: number }).id,
      });
      if (success && onDelRefetch) {
        message.success('操作成功');
        onDelRefetch();
      }
    } catch (error) {
      console.error('onDelete.error----->：', error);
    }
  };
  return (
    <>
      <span
        className={css['primary-color']}
        onClick={() => navigate(`./detail/${(item as T & { id: number }).id}`)}
      >
        查看
      </span>
      <Divider type="vertical" />
      <span
        className={css['primary-color']}
        onClick={() => navigate(`./edit/${(item as T & { id: number }).id}`)}
      >
        编辑
      </span>
      <Divider type="vertical" />
      <Popconfirm
        title="确定要删除？"
        okButtonProps={{ loading: false }}
        onConfirm={() => onDelete()}
        okText="确认"
        cancelText="取消"
      >
        <span className={css['danger-color']}>删除</span>
      </Popconfirm>
    </>
  );
}
