import { Divider, Popconfirm } from 'antd';
import { destroy } from '@/api/modules/biz';

export default function TableAction(props: ITableAction) {
  const navigate = useNavigate();
  const { item, onRefresh } = props;
  const onDelete = async () => {
    try {
      const { success } = await destroy(item);
      success && onRefresh && onRefresh();
    } catch (error) {
      console.error(`error----->：`, error);
    }
  };
  return (
    <div className="table_action_container">
      <span className="primary_color" onClick={() => navigate(`./detail/${item.id}`)}>
        查看
      </span>
      <Divider type="vertical" />
      <span className="primary_color" onClick={() => navigate(`./edit/${item.id}`)}>
        编辑
      </span>
      <Divider type="vertical" />
      <Popconfirm title="确定要删除？" onConfirm={() => onDelete()} okText="确认" cancelText="取消">
        <span className="danger_color">删除</span>
      </Popconfirm>
    </div>
  );
}
