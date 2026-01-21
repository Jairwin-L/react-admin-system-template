import { useState } from 'react';
import { Divider, message, Popconfirm } from 'antd';
import css from './index.module.less';

export default function SearchAction<L>(props: IConditionSearch.SearchAction<L>) {
  const navigate = useNavigate();
  const [actionLoading, setActionLoading] = useState(false);
  const { item, onDelRefetch, onDestroy } = props;
  const { id } = item as L & { id: number };
  const onConfirmDestroy = async () => {
    if (!onDestroy) return;
    try {
      setActionLoading(true);
      const { success } = await onDestroy(item);
      setActionLoading(false);
      if (!success) return;
      if (onDelRefetch) {
        message.success('操作成功');
        onDelRefetch();
      }
    } catch (error) {
      console.error('onConfirmDestroy.error----->：', error);
    } finally {
      setActionLoading(false);
    }
  };
  return (
    <>
      <span className={css['primary-color']} onClick={() => navigate(`./detail/${id}`)}>
        查看
      </span>
      <Divider orientation="vertical" />
      <span className={css['primary-color']} onClick={() => navigate(`./edit/${id}`)}>
        编辑
      </span>
      <Divider orientation="vertical" />
      <Popconfirm
        title="确定要删除？"
        onConfirm={onConfirmDestroy}
        okText="确认"
        cancelText="取消"
        okButtonProps={{ size: 'small', loading: actionLoading }}
        cancelButtonProps={{ size: 'small', disabled: actionLoading }}
      >
        <span className={css['danger-color']}>删除</span>
      </Popconfirm>
    </>
  );
}
