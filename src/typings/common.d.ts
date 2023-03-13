// form搜索配置
interface CommonSearchFormItemConfig {
  label?: string;
  name: string;
  component: React.ReactNode;
}

type IBaseSelect = IBaseSelectOption[];

interface IBaseSelectOption {
  value: string;
  label: string;
}
