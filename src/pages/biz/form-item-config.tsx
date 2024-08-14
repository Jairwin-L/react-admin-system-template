import { DatePicker, Input, Select, Tree } from 'antd';
import { getIntl } from '@/utils/language';
import { ColorSelect, WangEditor } from '@/components';
import { SELECT_OPTION } from '@/constants/antd';

export default function FormItemConfig(props: any) {
  const { model = {} } = props || {};
  const { formatMessage } = getIntl();
  const { schoolList = [], content = '', menuList = [], selectedKeys = [] } = model || {};
  const onCheck = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info);
  };
  const onSelect = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info);
  };
  console.log(
    `formatMessage({ id: 'table.form.input.name.placeholder' })----->：`,
    formatMessage({ id: 'table.form.input.name.placeholder' }),
  );
  return [
    {
      label: formatMessage({ id: 'table.form.label.name' }),
      name: 'name',
      rules: [
        { required: true, message: formatMessage({ id: 'table.form.input.name.placeholder' }) },
      ],
      component: (
        <Input
          allowClear
          placeholder={formatMessage({ id: 'table.form.input.name.placeholder' })}
          style={{ width: '180px' }}
        />
      ),
    },
    {
      label: '年龄',
      name: 'age',
      component: <Input allowClear placeholder="请输入年龄" style={{ width: '180px' }} />,
    },
    {
      label: '学校',
      name: 'school',
      component: (
        <Select {...SELECT_OPTION} placeholder="请选择学校">
          {schoolList.map(
            (item: any): JSX.Element => (
              <Select.Option key={item.value} value={item.value}>
                {item.label}
              </Select.Option>
            ),
          )}
        </Select>
      ),
    },
    {
      label: '颜色选择',
      name: 'color',
      component: <ColorSelect />,
    },
    {
      label: '生日',
      name: 'date',
      component: <DatePicker />,
    },
    {
      label: '内容',
      name: 'content',
      component: <WangEditor content={content} />,
    },
    {
      label: '菜单',
      name: 'treeData',
      component: (
        <Tree
          checkable
          defaultExpandedKeys={[]}
          defaultSelectedKeys={[]}
          defaultCheckedKeys={selectedKeys}
          onSelect={onSelect}
          onCheck={onCheck}
          treeData={menuList}
        />
      ),
    },
  ];
}
