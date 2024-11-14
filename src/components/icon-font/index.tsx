import { createFromIconfontCN } from '@ant-design/icons';

const IconFontPrefix = 'font_3551486_564pjimsbcd';
const Icon = createFromIconfontCN({
  scriptUrl: `//at.alicdn.com/t/c/${IconFontPrefix}.js`,
});

interface Props {
  type: string;
  className?: string;
}

export default function IconFont(props: Props) {
  return <Icon type={props.type} className={props.className ? props.className : ''} />;
}
