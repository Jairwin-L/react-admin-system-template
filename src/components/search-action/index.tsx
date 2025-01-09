import { Divider, message, Popconfirm } from 'antd';
import { destroy } from '@/api/methods/list';
import css from './index.module.less';

export default function SearchAction<L>(props: IConditionSearch.SearchAction<L>) {
  const navigate = useNavigate();
  const { apiPaths, item, onDelRefetch } = props;
  const { id } = item as L & { id: number };
  const onDelete = async () => {
    try {
      const { success } = await destroy(apiPaths.DESTROY, {
        id,
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
      <span className={css['primary-color']} onClick={() => navigate(`./detail/${id}`)}>
        查看
      </span>
      <Divider type="vertical" />
      <span className={css['primary-color']} onClick={() => navigate(`./edit/${id}`)}>
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
