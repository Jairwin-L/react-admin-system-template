import { Button, DatePicker, Form, Input, Select } from 'antd';
// import { makeExportExcel } from '@/utils/export-excel';
import { SELECT_OPTION } from '@/constants/antd';
import FileStreamUpload from '../file-stream-upload';
import ExcelExport from '../excel-export';
import css from './index.module.less';

const { RangePicker } = DatePicker;

export default function SearchForm<T>(props: IConditionSearch.SearchForm<T>) {
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
      <div className={css['search-container']}>
        <Form form={form} onFinish={onSearch}>
          <ul className={css['search-list']}>
            {searchKeys.map((item: IConditionSearch.SearchFormItemType) => (
              <li className={css.form_li} key={item.value}>
                <Form.Item name={item.value} label={item.label}>
                  {renderSearchItem(item)}
                </Form.Item>
              </li>
            ))}
          </ul>
        </Form>
      </div>
      <div className={css['search-tool']}>
        <div className={css['search-tool-item']}>
          {exportFlag ? (
            <ExcelExport<T> columns={columns} dataSource={downloadList as T[]} />
          ) : null}
          {fileUploadFlag ? <FileStreamUpload onSearchRefetch={onSearchRefetch} /> : null}
          <Button disabled={loading} type="primary" onClick={() => navigate('./create')}>
            增加
          </Button>
        </div>
        <div className={css['search-tool-item']}>
          <Button disabled={loading} onClick={() => form.resetFields()}>
            清空
          </Button>
          <Button loading={loading} onClick={() => form.submit()} type="primary">
            搜索
          </Button>
        </div>
      </div>
    </>
  );
}
