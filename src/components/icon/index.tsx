import { createFromIconfontCN } from "@ant-design/icons";
const IconFontPrefix = "font_3551486_564pjimsbcd";
const IconFont = createFromIconfontCN({
  scriptUrl: `//at.alicdn.com/t/c/${IconFontPrefix}.js`,
});

interface Props {
  type: string;
  className?: string;
}

export default (props: Props) => (
  <IconFont
    type={props.type}
    className={props.className ? props.className : ""}
  />
);
