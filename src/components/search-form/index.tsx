import { useNavigate } from 'react-router-dom';
import { Button, DatePicker, Form, Input, Select, Space } from 'antd';
import { SELECT_OPTION } from '@/constant';
import { makeExportExcel } from '@/utils/export-excel';
import FileStreamUpload from '../file-stream-upload';
import style from './index.module.less';

const { RangePicker } = DatePicker;

function SearchForm<T>(props: IConditionSearch.SearchForm<T>) {
  const {
    searchKeys = [],
    onSearch,
    loading = false,
    columns = [],
    downloadList = [],
    exportFlag = false,
    fileUploadFlag = false,
    onSearchRefetch,
  } = props;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onExportExcel = () => {
    makeExportExcel({ columns, listData: downloadList as T[] });
  };
  const renderSearchItem = (searchItem: IConditionSearch.SearchFormItemType) => {
    const {
      placeholder,
      disabled = false,
      selectOption = [],
    } = searchItem as IConditionSearch.SearchFormItemType & {
      selectOption: IBaseSelect;
    };
    switch (searchItem.type) {
      case 'time': {
        return <RangePicker placeholder={placeholder as [string, string]} showTime />;
      }
      case 'select': {
        return (
          <Select {...SELECT_OPTION} disabled={disabled} placeholder={placeholder}>
            {selectOption.map(
              (item: IBaseSelectOption): JSX.Element => (
                <Select.Option key={item.value} value={item.value}>
                  {item.label}
                </Select.Option>
              ),
            )}
          </Select>
        );
      }
      case 'string':
        return <Input disabled={disabled} placeholder={placeholder as string} />;
      case 'component':
        return <searchItem.component form={form} name={searchItem.value} />;
      default:
        return <Input disabled={disabled} placeholder={placeholder as string} />;
    }
  };
  return (
    <>
      <div className={style.search_container}>
        <Form form={form} onFinish={onSearch}>
          <ul className={style.form_ul}>
            {searchKeys.map((item: IConditionSearch.SearchFormItemType) => (
              <li className={style.form_li} key={item.value}>
                <Form.Item name={item.value} label={item.label}>
                  {renderSearchItem(item)}
                </Form.Item>
              </li>
            ))}
          </ul>
        </Form>
      </div>
      <div className={style.search_tool}>
        <Space>
          {exportFlag ? <Button onClick={onExportExcel}>文件导出</Button> : null}
          {fileUploadFlag ? <FileStreamUpload onSearchRefetch={onSearchRefetch} /> : null}
          <Button disabled={loading} type="primary" onClick={() => navigate('./add')}>
            增加
          </Button>
        </Space>
        <Space>
          <Button disabled={loading} onClick={() => form.resetFields()}>
            清空
          </Button>
          <Button loading={loading} onClick={() => form.submit()} type="primary">
            搜索
          </Button>
        </Space>
      </div>
    </>
  );
}

export default SearchForm;
