const schoolList = [
  {
    value: 'BJDX',
    label: '北京大学',
  },
  {
    value: 'QHDX',
    label: '清华大学',
  },
  {
    value: 'SHJDDX',
    label: '上海交通大学',
  },
  {
    value: 'ZJDX',
    label: '浙江大学',
  },
  {
    value: 'WHDX',
    label: '武汉大学',
  },
];

const searchKeys: IConditionSearch.SearchFormItemType[] = [
  {
    value: 'name',
    type: 'string',
    label: '姓名',
    placeholder: '请输入姓名',
  },
  {
    value: 'school',
    type: 'select',
    label: '学校',
    selectOption: schoolList,
    placeholder: '请选择学校',
  },
  {
    value: 'date',
    type: 'time',
    label: '日期',
    placeholder: ['请选择开始日期', '请选择结束日期'],
  },
];

export default searchKeys;
