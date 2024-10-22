export const SELECT_OPTION = {
  allowClear: true,
  showSearch: true,
  optionFilterProp: 'children',
  filterOption: (input: any, option: any) =>
    option?.children?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0,
};
export const MODAL_OPTION = {
  maskClosable: false,
  keyboard: false,
  centered: true,
  forceRender: true,
};
