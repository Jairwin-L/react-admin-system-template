import * as ExcelJs from 'exceljs';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

// 生成头部columns
function generateHeaders(columns: IConditionSearch.GenerateHeaders[] = []) {
  return columns.map((col: IConditionSearch.GenerateHeaders) => {
    const obj: IConditionSearch.TableHeader = {
      // 显示的 name
      header: col?.title,
      // 用于数据匹配的 key
      key: col?.dataIndex || col?.key,
      // 列宽
      width: col.width ? col.width / 4 : 15,
    };
    if (col.children) {
      col.children.forEach((item: IConditionSearch.GenerateHeaders) => ({
        key: item.dataIndex || item.key,
        header: item.title,
        width: item.width,
        parentKey: col.key,
      }));
    }
    return obj;
  });
}
// 导出excel
function saveWorkbook(workbook: Workbook, fileName: string) {
  // 导出文件
  workbook.xlsx
    .writeBuffer()
    .then((data: any) => {
      const blob = new Blob([data], { type: '' });
      saveAs(blob, fileName);
    })
    .catch((error) => {
      console.log('saveWorkbook:error----->：', error);
    });
}

/**
 * @module makeExportExcel
 * @description excel文件导出
 */
export function makeExportExcel<T>(data: IConditionSearch.MakeExportExcel<T>) {
  const { columns = [], listData = [], rowHeight = 20, workSheetName = 'demo sheet' } = data;
  // 创建工作簿
  const workbook = new ExcelJs.Workbook();
  // 添加sheet
  const worksheet = workbook.addWorksheet(workSheetName);
  // 设置 sheet 的默认行高
  worksheet.properties.defaultRowHeight = rowHeight;
  // 设置列
  worksheet.columns = generateHeaders(columns as IConditionSearch.GenerateHeaders[]);
  // 添加行
  worksheet.addRows(listData as T[]);
  // 导出excel
  saveWorkbook(workbook, `${workSheetName}.xlsx`);
}
