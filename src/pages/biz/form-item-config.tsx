import { Cascader, ColorPicker, DatePicker, Input, Select, Tree } from 'antd';
import { ImageCropper, RichEditor } from '@/components';
import { genAddressOptions } from '@/utils';
import { SELECT_OPTION } from '@/constants/antd';

/**
 * FormItemConfig 组件，用于生成表单项的配置数组
 *
 * @param props 组件属性
 * @returns 表单项配置数组
 */
export default function FormItemConfig(props: any) {
  const { model = {} } = props || {};
  const { schoolList = [], content = '', menuList = [], selectedKeys = [] } = model || {};
  const onCheck = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info);
  };
  const onSelect = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info);
  };
  const onImageCropper = (src: string) => {
    console.log(`src----->：`, src);
  };

  return [
    {
      label: '姓名',
      name: 'name',
      rules: [{ required: true, message: '请输入姓名' }],
      component: <Input allowClear placeholder="请输入姓名" style={{ width: '180px' }} />,
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
      component: <ColorPicker showText />,
    },
    {
      label: '生日',
      name: 'date',
      component: <DatePicker />,
    },
    {
      label: '头像',
      name: 'avatar',
      component: <ImageCropper onImageCropper={(src) => onImageCropper(src)} />,
    },
    {
      label: '地址',
      name: 'address',
      component: <Cascader options={genAddressOptions()} />,
    },
    {
      label: '详细地址',
      name: 'addressDetail',
      component: <Input />,
    },
    {
      label: '内容',
      name: 'content',
      component: <RichEditor content={content} />,
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
