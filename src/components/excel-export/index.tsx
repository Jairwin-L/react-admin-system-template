import { Button } from 'antd';
import { makeExportExcel } from '@/utils';

export default function ExcelExport<T>(props: IExcelExport<T>) {
  const { columns = [], dataSource = [], workSheetName }: any = props;
  const onExportExcel = () => {
    makeExportExcel<T>({ columns, dataSource, workSheetName });
  };
  return <Button onClick={onExportExcel}>文件导出</Button>;
}
